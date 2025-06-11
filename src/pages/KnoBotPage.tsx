import { useRef, useState } from 'react';
import { LiveAPIProvider } from '../contexts/LiveAPIContext';
import { JarvisAssistant } from '../components/plumbing-analyzer/PlumbingAnalyzer';
import ControlTray from '../components/control-tray/ControlTray';
import './knobot-page.scss';

const API_KEY = import.meta.env.VITE_GEMINI_API_KEY as string;
const host = "generativelanguage.googleapis.com";
const url = `wss://${host}/ws/google.ai.generativelanguage.v1alpha.GenerativeService.BidiGenerateContent`;

export function KnoBotPage() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [videoStream, setVideoStream] = useState<MediaStream | null>(null);

  return (
    <div className="knobot-page">
      <div className="knobot-header">
        <h1>Jarvis - Your AI Voice Assistant</h1>
        <p>Your intelligent companion capable of handling any task through voice and visual interaction</p>
      </div>
      <LiveAPIProvider apiKey={API_KEY} url={url}>
        <div className="analyzer-container">
          <div className="content-area">
            <div className="video-container">
              <video 
                ref={videoRef}
                autoPlay 
                playsInline
                muted
                className={videoStream ? 'active' : ''}
              />
              {!videoStream && (
                <div className="video-placeholder">
                  <span className="material-symbols-outlined">videocam_off</span>
                  <p>Camera is off</p>
                </div>
              )}
            </div>
            <JarvisAssistant />
          </div>
          <ControlTray
            videoRef={videoRef}
            supportsVideo={true}
            onVideoStreamChange={setVideoStream}
          />
        </div>
      </LiveAPIProvider>
    </div>
  );
}

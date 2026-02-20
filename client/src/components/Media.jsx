import React, { useState, useEffect, useRef, useCallback } from 'react';
import './Media.css';

// Defined outside component so reference is stable
const slides = [
  {
    type: 'video',
    src: '/assets/media-video.mp4',
    outlet: 'Video Feature',
    title: 'My Story in the Media',
    date: '2025',
  },
  {
    type: 'photo',
    src: '/assets/achievement-leadership.png',
    outlet: 'Divya Bhaskar',
    title: 'Youngest SOUL Leader',
    date: 'Feb 2025',
  },
  {
    type: 'photo',
    src: '/assets/achievement-award.png',
    outlet: 'Gujarat Samachar',
    title: 'Leadership Recognition',
    date: 'Feb 2025',
  },
  {
    type: 'photo',
    src: '/assets/achievement-research.png',
    outlet: 'Ahmedabad Mirror',
    title: 'Student Achievement',
    date: 'Mar 2025',
  },
  {
    type: 'photo',
    src: '/assets/achievement-math.png',
    outlet: 'Punjab Kesari',
    title: 'Meeting PM Modi',
    date: 'Feb 2025',
  },
];

const Media = () => {
  const [current, setCurrent] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isMuted, setIsMuted] = useState(true);   // starts muted for autoplay policy
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef(null);
  const intervalRef = useRef(null);

  // ── Navigate ────────────────────────────────────────────────────────────
  const goTo = useCallback(
    (index) => {
      if (isTransitioning) return;
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrent(index);
        setIsTransitioning(false);
      }, 350);
    },
    [isTransitioning]
  );

  const goNext = useCallback(() => goTo((current + 1) % slides.length), [current, goTo]);
  const goPrev = useCallback(() => goTo((current - 1 + slides.length) % slides.length), [current, goTo]);

  // ── Auto-advance photo slides every 10 s ────────────────────────────────
  useEffect(() => {
    clearInterval(intervalRef.current);
    if (slides[current].type === 'photo') {
      intervalRef.current = setInterval(() => {
        setCurrent((prev) => (prev + 1) % slides.length);
      }, 10000);
    }
    return () => clearInterval(intervalRef.current);
  }, [current]);

  // ── Play video whenever video slide is active ───────────────────────────
  useEffect(() => {
    const vid = videoRef.current;
    if (!vid) return;

    if (slides[current].type === 'video') {
      vid.muted = isMuted;
      vid.currentTime = 0;
      vid.play()
        .then(() => setIsPlaying(true))
        .catch(() => {
          // Autoplay blocked — keep muted and retry once
          vid.muted = true;
          setIsMuted(true);
          vid.play().then(() => setIsPlaying(true)).catch(() => { });
        });
    } else {
      vid.pause();
      setIsPlaying(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [current]);

  // Sync mute state to the video element in real-time
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.muted = isMuted;
    }
  }, [isMuted]);

  // ── Toggle mute ─────────────────────────────────────────────────────────
  const toggleMute = () => {
    const vid = videoRef.current;
    if (!vid) return;
    const next = !isMuted;
    setIsMuted(next);
    vid.muted = next;
    // If video was paused due to autoplay block, play it now
    if (vid.paused) {
      vid.play().then(() => setIsPlaying(true)).catch(() => { });
    }
  };

  // ── Video ended → go to first photo ────────────────────────────────────
  const handleVideoEnded = () => {
    setIsPlaying(false);
    goTo(1);
  };

  const handleVideoPlay = () => setIsPlaying(true);
  const handleVideoPause = () => setIsPlaying(false);

  const slide = slides[current];
  const isVideoSlide = slide.type === 'video';

  return (
    <section id="media" className="media-professional">
      <div className="container">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-label">Media</span>
          <h2 className="section-title">
            Press &amp; <span className="accent-text">Publications</span>
          </h2>
          <div className="title-underline"></div>
        </div>

        {/* ── Slideshow ─────────────────────────────────────────────────── */}
        <div className="media-slideshow">

          {/* Slide canvas */}
          <div className={`media-slide-canvas ${isTransitioning ? 'fade-out' : 'fade-in'}`}>

            {/* Always render video, show/hide via CSS so ref stays attached */}
            <video
              ref={videoRef}
              className={`media-slide-media ${isVideoSlide ? '' : 'media-hidden'}`}
              src="/assets/media-video.mp4"
              playsInline
              muted
              onEnded={handleVideoEnded}
              onPlay={handleVideoPlay}
              onPause={handleVideoPause}
            />

            {/* Photo */}
            {!isVideoSlide && (
              <img
                className="media-slide-media"
                src={slide.src}
                alt={slide.title}
              />
            )}

            {/* Bottom caption overlay */}
            <div className="media-slide-overlay">
              <div className="media-slide-info">
                <span className="media-slide-outlet">{slide.outlet}</span>
                <h3 className="media-slide-title">{slide.title}</h3>
                <span className="media-slide-date">{slide.date}</span>
              </div>
            </div>

            {/* Slide counter */}
            <div className="media-slide-counter">
              <span className="media-counter-current">{current + 1}</span>
              <span className="media-counter-sep"> / {slides.length}</span>
            </div>

            {/* ── Video Controls Bar ──────────────────────────────────── */}
            {isVideoSlide && (
              <div className="media-video-controls">
                {/* Playing indicator */}
                <div className={`media-video-badge ${isPlaying ? 'playing' : 'paused'}`}>
                  {isPlaying ? '▶ Playing' : '⏸ Paused'}
                </div>

                {/* Mute / Unmute toggle */}
                <button
                  className={`media-audio-btn ${isMuted ? 'muted' : 'unmuted'}`}
                  onClick={toggleMute}
                  title={isMuted ? 'Enable Audio' : 'Disable Audio'}
                  aria-label={isMuted ? 'Enable Audio' : 'Disable Audio'}
                >
                  {isMuted ? (
                    <>
                      <span className="audio-icon">🔇</span>
                      <span className="audio-label">Enable Audio</span>
                    </>
                  ) : (
                    <>
                      <span className="audio-icon">🔊</span>
                      <span className="audio-label">Disable Audio</span>
                    </>
                  )}
                </button>
              </div>
            )}

            {/* 10 s progress bar for photo slides */}
            {!isVideoSlide && (
              <div key={`progress-${current}`} className="media-progress-bar" />
            )}
          </div>

          {/* Arrow controls */}
          <button className="media-arrow media-arrow-left" onClick={goPrev} aria-label="Previous slide">
            &#8249;
          </button>
          <button className="media-arrow media-arrow-right" onClick={goNext} aria-label="Next slide">
            &#8250;
          </button>

          {/* Dot indicators */}
          <div className="media-dots">
            {slides.map((s, i) => (
              <button
                key={i}
                className={`media-dot ${i === current ? 'active' : ''} ${s.type === 'video' ? 'video-dot' : ''}`}
                onClick={() => goTo(i)}
                aria-label={`Slide ${i + 1}`}
              />
            ))}
          </div>
        </div>

        {/* ── Thumbnail Strip ─────────────────────────────────────────── */}
        <div className="media-thumbnails">
          {slides.map((s, i) => (
            <button
              key={i}
              className={`media-thumb ${i === current ? 'active' : ''}`}
              onClick={() => goTo(i)}
              aria-label={s.title}
            >
              {s.type === 'video' ? (
                <div className="media-thumb-video-icon">▶</div>
              ) : (
                <img src={s.src} alt={s.title} />
              )}
              <span className="media-thumb-label">{s.outlet}</span>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Media;

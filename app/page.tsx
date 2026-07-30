"use client";

import Image from "next/image";
import { useState, useRef, useEffect } from "react";
import { Instrument_Serif } from "next/font/google";

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
});

function TiltQRCode() {
  const ref = useRef<HTMLDivElement>(null);
  const [style, setStyle] = useState({});

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -10; // tilt strength
    const rotateY = ((x - centerX) / centerX) * 10;

    setStyle({
      transform: `perspective(400px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.05, 1.05, 1.05)`,
    });
  };

  const handleMouseLeave = () => {
    setStyle({
      transform:
        "perspective(400px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)",
    });
  };

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="inline-flex p-3 rounded-2xl transition-transform duration-150 ease-out"
      style={{
        backgroundColor: "rgba(255,255,255,0.14)",
        backdropFilter: "blur(16px)",
        WebkitBackdropFilter: "blur(16px)",
        transformStyle: "preserve-3d",
        ...style,
      }}
    >
      <Image
        src="/qr-code.png"
        alt="Scan to download Eaves"
        width={128}
        height={128}
        className="rounded-md"
      />
    </div>
  );
}

export default function Home() {
  const trades = [
    {
      investor: "Cathie Wood",
      action: "increased position in",
      stock: "Airbnb",
      change: "0.1%",
      newValue: "0.8%",
      actionType: "increased",
      investorImage: "/Cathie Wood.png",
      stockImage: "/Airbnb.png"
    },
    {
      investor: "Mortimer Buckley",
      action: "increased position in",
      stock: "Philip Morris",
      change: "0.3%",
      newValue: "0.4%",
      actionType: "increased",
      investorImage: "/Mortimer Buckley.png",
      stockImage: "/Philip Morris.png"
    },
    {
      investor: "Steven Cohen",
      action: "has a new position in",
      stock: "Lockheed Martin",
      change: "0.2%",
      newValue: null,
      actionType: "new",
      investorImage: "/Steven Cohen.png",
      stockImage: "/Lockheed Martin.png"
    },
    {
      investor: "Andreas Halvorsen",
      action: "increased position in",
      stock: "Visa",
      change: "1.7%",
      newValue: "2.6%",
      actionType: "increased",
      investorImage: "/Andreas Halvorsen.png",
      stockImage: "/VISA.png"
    },
    {
      investor: "Jim Simons",
      action: "decreased position in",
      stock: "AppLovin",
      change: "0.9%",
      newValue: "0.6%",
      actionType: "decreased",
      investorImage: "/Jim Simons.png",
      stockImage: "/AppLovin.png"
    },
    {
      investor: "Ray Dalio",
      action: "decreased position in",
      stock: "SPY",
      change: "6.7%",
      newValue: "6.5%",
      actionType: "decreased",
      investorImage: "/Ray Dalio.png",
      stockImage: "/SPY.png"
    },
  ];

  const renderTradeCard = (trade: typeof trades[0], key: string | number) => {
    const actionWord = trade.actionType === "new" ? "new" : trade.actionType === "increased" ? "increased" : "decreased";
    const actionColor = trade.actionType === "decreased" ? "#C1154F" : "#0978B3";

    const actionIndex = trade.action.toLowerCase().indexOf(actionWord);
    const beforeAction = actionIndex >= 0 ? trade.action.substring(0, actionIndex) : "";
    const afterAction = actionIndex >= 0 ? trade.action.substring(actionIndex + actionWord.length) : "";
    const highlightedAction = actionIndex >= 0 ? trade.action.substring(actionIndex, actionIndex + actionWord.length) : "";

    return (
      <div
        key={key}
        className="flex-shrink-0 w-[320px] bg-white p-8 border border-gray-100"
        style={
          {
            boxShadow: '0 4px 80px rgba(0, 0, 0, 0.06), 0 2px 20px rgba(0, 0, 0, 0.02), 0 2px 6px rgba(0, 0, 0, 0.04)',
            borderRadius: '24px'
          }
        }
      >
        <div className="relative mb-4">
          <div className="relative w-[56px] h-[56px]">
            <div style={{
              transform: 'rotate(-4deg)',
              boxShadow: '0 2px 8px rgba(0, 0, 0, 0.04)',
              borderRadius: '50%',
              overflow: 'hidden',
              width: '40px',
              height: '40px',
              border: '0.5px solid rgba(0, 0, 0, 0.1)'
            }}>
              <Image
                src={trade.investorImage}
                alt={trade.investor}
                width={40}
                height={40}
                className="rounded-full"
              />
            </div>
            <div
              className="absolute -bottom-1 -right-1 w-[40px] h-[40px] rounded-xl overflow-hidden"
              style={{
                transform: 'rotate(4deg)',
                boxShadow: '0 2px 8px rgba(0, 0, 0, 0.04), inset 0 0 0 0.5px rgba(0, 0, 0, 0.1)',
                border: '0.5px solid rgba(0, 0, 0, 0.1)'
              }}
            >
              <Image
                src={trade.stockImage}
                alt={trade.stock}
                width={40}
                height={40}
                className="object-cover"
              />
            </div>
          </div>
        </div>
        <p className="text-lg leading-[1.4] font-medium mb-3" style={{ color: '#222' }}>
          <span className="font-medium">{trade.investor}</span>{" "}
          {beforeAction}
          {highlightedAction && (
            <span style={{ color: actionColor, fontWeight: 600 }}>{highlightedAction}</span>
          )}
          {afterAction}{" "}
          <span className="font-medium">{trade.stock}</span>
        </p>
        <div className="flex items-center gap-2 text-base">
          {trade.newValue ? (
            <>
              <span className="text-decoration-line: line-through font-medium" style={{ color: '#c4c4c4' }}>{trade.change}</span>
              <span className="font-medium" style={{ color: '#222' }}>{trade.newValue}</span>
            </>
          ) : (
            <span className="font-semibold" style={{ color: '#222' }}>{trade.change}</span>
          )}
        </div>
      </div>
    );
  };

  const BeforeAfterSlider = ({ beforeImage, afterImage }: { beforeImage: string; afterImage: string }) => {
    const [sliderPosition, setSliderPosition] = useState(50);
    const [isDragging, setIsDragging] = useState(false);
    const [hasInteracted, setHasInteracted] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);

    // Auto-preview animation when component comes into view
    useEffect(() => {
      if (hasInteracted) return;

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              // Wait 800ms before starting the animation
              setTimeout(() => {
                if (hasInteracted) return;

                let startTime: number | null = null;
                const duration = 1500; // Total animation duration in ms
                const startPosition = 50;
                const peakPosition = 55;

                const animate = (currentTime: number) => {
                  if (!startTime) startTime = currentTime;
                  const elapsed = currentTime - startTime;
                  const progress = Math.min(elapsed / duration, 1);

                  // Ease in-out function for smooth animation
                  const easeInOutCubic = (t: number) => {
                    return t < 0.5
                      ? 4 * t * t * t
                      : 1 - Math.pow(-2 * t + 2, 3) / 2;
                  };

                  const easedProgress = easeInOutCubic(progress);

                  // Go from 50 to 70 and back to 50
                  let position;
                  if (easedProgress < 0.5) {
                    // First half: 50 to 70
                    position = startPosition + (peakPosition - startPosition) * (easedProgress * 2);
                  } else {
                    // Second half: 70 to 50
                    position = peakPosition - (peakPosition - startPosition) * ((easedProgress - 0.5) * 2);
                  }

                  setSliderPosition(position);

                  if (progress < 1) {
                    requestAnimationFrame(animate);
                  } else {
                    setSliderPosition(50);
                  }
                };

                requestAnimationFrame(animate);
              }, 400);
            }
          });
        },
        { threshold: 0.5 }
      );

      if (containerRef.current) {
        observer.observe(containerRef.current);
      }

      return () => observer.disconnect();
    }, [hasInteracted]);

    const handleMove = (clientX: number) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const x = Math.max(0, Math.min(clientX - rect.left, rect.width));
      const percent = Math.max(0, Math.min((x / rect.width) * 100, 100));
      setSliderPosition(percent);
      setHasInteracted(true);
    };

    const handleMouseDown = () => setIsDragging(true);
    const handleMouseUp = () => setIsDragging(false);

    const handleMouseMove = (e: React.MouseEvent) => {
      if (!isDragging) return;
      handleMove(e.clientX);
    };

    const handleTouchMove = (e: React.TouchEvent) => {
      if (e.touches.length > 0) {
        handleMove(e.touches[0].clientX);
      }
    };

    return (
      <div
        ref={containerRef}
        className="relative w-full aspect-square md:aspect-[2/1] bg-gray-100 rounded-3xl overflow-hidden cursor-ew-resize select-none"
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseUp}
        onTouchStart={() => setIsDragging(true)}
        onTouchEnd={() => setIsDragging(false)}
        onTouchMove={handleTouchMove}
      >
        {/* After Image (Background) */}
        <div className="absolute inset-0" style={{ pointerEvents: 'none' }}>
          <Image
            src={afterImage}
            alt="After"
            fill
            className="object-cover"
            draggable={false}
          />
        </div>

        {/* Before Image (Foreground with clip) */}
        <div
          className="absolute inset-0"
          style={{
            clipPath: `inset(0 ${100 - sliderPosition}% 0 0)`,
            pointerEvents: 'none'
          }}
        >
          <Image
            src={beforeImage}
            alt="Before"
            fill
            className="object-cover"
            draggable={false}
          />
        </div>

        {/* Slider Line */}
        <div
          className="absolute top-0 bottom-0 bg-white cursor-ew-resize"
          style={{
            left: `${sliderPosition}%`,
          }}
        >
          {/* Slider Handle */}
          <div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full flex items-center justify-center"
            style={{
              boxShadow: '0 0 16px rgba(0, 0, 0, 0.1)',
            }}
          >
            <svg
              width="20"
              height="16"
              viewBox="0 0 20 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              style={{ pointerEvents: 'none' }}
            >
              <path
                d="M7 3L3 8L7 13"
                stroke="#A6A6A6"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M13 3L17 8L13 13"
                stroke="#A6A6A6"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>
      </div>
    );
  };

  const features = [
    {
      title: "SEC 13F filings – From complexity to clarity",
      description: "Eaves turns quarterly filings into clear, easy-to-read insights. You get the important changes without digging through spreadsheets.",
      type: "slider",
      beforeImage: "/feature-1a-placeholder.png",
      afterImage: "/feature-1b-placeholder.png",
    },
    {
      title: "Track every buy and sell",
      description: "See the latest moves from top investors as they happen. Every buy and sell is organised in one place so you can follow their activity with ease.",
      type: "dual",
      images: ["/feature-2a-placeholder.png", "/feature-2b-placeholder.png"],
    },
    {
      title: "Analyze trades",
      description: "Understand how investors build and adjust their portfolios. Discover patterns, conviction levels and long-term shifts.",
      type: "single",
      images: ["/feature-1-placeholder.png"],
    },
    {
      title: "Discover themes and ideas",
      description: "Explore shared themes, sectors and ideas that investors are moving toward.",
      type: "dual",
      images: ["/feature-4a-placeholder.png", "/feature-4b-placeholder.png"],
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative w-full overflow-hidden">
        {/* Fixed nav pill - stays on scroll */}
        <div className="fixed top-4 sm:top-6 left-0 right-0 px-4 sm:px-6 lg:px-8 z-50">
          <div
            className="flex items-center justify-between w-full max-w-[420px] mx-auto rounded-full pl-4 pr-1.5 py-1.5"
            style={{
              backgroundColor: "rgba(60,60,60,0.55)",
              backdropFilter: "blur(16px)",
              WebkitBackdropFilter: "blur(16px)",
            }}
          >
            <div className="flex items-center gap-2">
              <Image
                src="/logo-placeholder-header.svg"
                alt="Eaves"
                width={72}
                height={18}
                className="brightness-0 invert"
              />
            </div>
            <a href="http://share.eaves.ai/" target="_blank" rel="noopener noreferrer">
              <button className="bg-white text-black rounded-full px-5 py-2 text-sm font-medium">
                Get the app
              </button>
            </a>
          </div>
        </div>

        {/* Background image */}
        <div className="relative w-full h-[85vh] sm:h-auto sm:aspect-[3/2] md:aspect-[16/9]">
          <Image
            src="/hero-bg.png"
            alt="Eaves app on phone"
            fill
            className="object-cover object-top"
            priority
          />

          {/* Headline + copy + QR, anchored to bottom via flexbox (never clips) */}
          <div className="absolute inset-0 flex flex-col items-center justify-end text-center px-4 sm:px-6 lg:px-8 pb-8 sm:pb-10 md:pb-40 lg:pb-56 translate-y-0 md:translate-y-[100px]">
            <h1
              className={`${instrumentSerif.className} text-white text-[56px] sm:text-[44px] md:text-[52px] lg:text-[68px] leading-[1.05] tracking-[-0.5px] mb-3 sm:mb-4 max-w-[320px] sm:max-w-md md:max-w-2xl`}
            >
              Track hedge fund portfolios
            </h1>
            <p
              className="text-[#c9c9c9] sm:text-sm md:text-lg leading-[1.5] sm:leading-[1.6] max-w-[260px] sm:max-w-sm md:max-w-md mb-4 sm:mb-6 line-clamp-4"
              style={{ textWrap: "balance" }}
            >
              See what top investors and politicians are buying and selling,
              with AI-powered portfolio insights.
            </p>

            {/* QR code (desktop/tablet only) */}
            <div className="hidden md:block">
              <TiltQRCode />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section - Part 1 (SEC 13F clarity) */}
      <section className="pt-16 lg:pt-16">
        <div className="max-w-5xl mx-auto px-6 lg:px-8">
          {(() => {
            const feature = features[0];
            return (
              <div>
                <h2 className="max-w-md mx-auto text-3xl md:text-4xl font-medium leading-[1.2] tracking-[-0.025em] text-center mb-4" style={{ color: '#222' }}>
                  {feature.title}
                </h2>
                <p className="max-w-xl mx-auto text-base md:text-lg leading-[1.6] font-normal mb-12 text-center" style={{ color: '#808080' }}>
                  {feature.description}
                </p>
                <BeforeAfterSlider
                  beforeImage={feature.beforeImage!}
                  afterImage={feature.afterImage!}
                />
              </div>
            );
          })()}
        </div>
      </section>

      {/* Live Trades Feed - Auto-scrolling Ticker */}
      <section className="w-full py-16 overflow-y-visible my-16" style={{ overflow: 'hidden' }}>
        <div className="ticker-container" style={{ overflow: 'visible' }}>
          <div className="ticker-track" style={{ gap: '24px' }}>
            {/* First set of cards */}
            {trades.map((trade, index) => renderTradeCard(trade, index))}
            {/* Duplicate set for seamless loop */}
            {trades.map((trade, index) => renderTradeCard(trade, `duplicate-${index}`))}
          </div>
        </div>
      </section>

      {/* Features Section - Remaining features */}
      <section className="py-16 lg:py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="space-y-16 lg:space-y-32">
            {features.slice(1).map((feature, index) => (
              <div key={index}>
                <h2 className="max-w-md mx-auto text-3xl md:text-4xl font-medium leading-[1.2] tracking-[-0.025em] text-center mb-4" style={{ color: '#222' }}>
                  {feature.title}
                </h2>
                <p className="max-w-xl mx-auto text-base md:text-lg leading-[1.6] font-normal mb-12 text-center" style={{ color: '#808080' }}>
                  {feature.description}
                </p>
                {/* Feature Images */}
                {feature.type === "slider" ? (
                  <BeforeAfterSlider
                    beforeImage={feature.beforeImage!}
                    afterImage={feature.afterImage!}
                  />
                ) : feature.type === "single" ? (
                  <div className="relative w-full aspect-square md:aspect-[2/1] bg-gray-100 rounded-3xl overflow-hidden">
                    <Image
                      src={feature.images![0]}
                      alt={feature.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                ) : (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    {feature.images!.map((image, imgIndex) => (
                      <div key={imgIndex} className="relative w-full aspect-square md:aspect-[1] bg-gray-100 rounded-3xl overflow-hidden">
                        <Image
                          src={image}
                          alt={`${feature.title} ${imgIndex + 1}`}
                          fill
                          className="object-cover"
                        />
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="mb-24 relative w-full rounded-3xl overflow-hidden">
            <Image
              src="/logo-placeholder-header.svg"
              alt="Logo"
              width={4000}
              height={40}
              className="object-cover"
            />
          </div>

          {/* Legal info — ABL 28 kap. 5 § + GDPR */}
          <div className="mb-6 flex flex-wrap gap-x-6 gap-y-1">
            <span className="text-s text-[#808080]">Eaves AB</span>
            <span className="text-s text-[#808080]">5595464107</span>
            <span className="text-s text-[#808080]">Stockholm</span>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-[#808080]">© 2025 Eaves AB. All rights reserved.</p>
            <div className="flex flex-wrap gap-6">
              <a href="/terms" className="text-sm text-[#808080] transition-colors footer-link">Terms</a>
              <a href="/privacy" className="text-sm text-[#808080] transition-colors footer-link">Privacy</a>
              <a href="https://www.threads.com/@joineaves" target="_blank" rel="noopener noreferrer" className="text-sm text-[#808080] transition-colors footer-link">Threads</a>
              <a href="https://www.tiktok.com/@eaves.ai?lang=en" target="_blank" rel="noopener noreferrer" className="text-sm text-[#808080] transition-colors footer-link">TikTok</a>
              <a href="https://x.com/Eaves_App" target="_blank" rel="noopener noreferrer" className="text-sm text-[#808080] transition-colors footer-link">X (Twitter)</a>
              <a href="mailto:johan@eaves.ai" className="text-sm text-[#808080] transition-colors footer-link">Contact</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
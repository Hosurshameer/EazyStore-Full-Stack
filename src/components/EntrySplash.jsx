export default function EntrySplash({
  src = "/stickers/logo-transparent-svg.svg",
  bgSrc = "/stickers/sticker-bg.jpg",
  alt = "Loading",
  showText = true,
  leaving = false,
}) {
  return (
    <div
      className={[
        "fixed inset-0 z-[9999]",
        "transition-opacity duration-700 ease-out",
        leaving ? "opacity-0" : "opacity-100",
      ].join(" ")}
      aria-hidden={leaving ? "true" : "false"}
    >
      <div
        className={[
          "absolute inset-0 bg-cover bg-center",
          "[filter:brightness(0.95)_saturate(0.85)_contrast(1.05)]",
          "dark:[filter:brightness(0.55)_saturate(0.9)_contrast(1.05)]",
        ].join(" ")}
        style={{
          backgroundImage: `url("${bgSrc}")`,
        }}
      />
      <div
        className={[
          "absolute inset-0 backdrop-blur-[1px]",
          "bg-white/70 dark:bg-black/75",
        ].join(" ")}
      />

      <div className="relative flex h-full w-full items-center justify-center">
        <div className="flex flex-col items-center gap-6 px-6">
          <div
            className={[
              "transition-transform duration-700 ease-out",
              leaving ? "scale-95" : "scale-100",
            ].join(" ")}
          >
            <div className={leaving ? "" : "entry-logo-bounce2"}>
              <img
                src={src}
                alt={alt}
                className={[
                  "w-[680px] max-w-[92vw] select-none",
                  "[filter:brightness(1.05)_contrast(1.35)_saturate(1.05)_drop-shadow(0_0_28px_rgba(0,0,0,0.28))]",
                  "dark:[filter:brightness(1.75)_contrast(1.2)_saturate(1.25)_drop-shadow(0_0_32px_rgba(255,255,255,0.22))]",
                ].join(" ")}
                draggable="false"
              />
            </div>
          </div>
        {showText ? (
          <p
            className={[
              "text-lg font-semibold",
              "text-slate-900 dark:text-white/90",
              "drop-shadow-[0_2px_18px_rgba(255,255,255,0.65)]",
              "dark:drop-shadow-[0_2px_18px_rgba(0,0,0,0.55)]",
            ].join(" ")}
          >
            Loading…
          </p>
        ) : null}
        </div>
      </div>
    </div>
  );
}

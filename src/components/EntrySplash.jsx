export default function EntrySplash({
  src = "/stickers/logo-transparent-svg.svg",
  alt = "Loading",
  showText = true,
  leaving = false,
}) {
  const isDarkMode = localStorage.getItem("theme") === "dark";

  return (
    <div
      className={[
        "fixed inset-0 z-[9999] flex items-center justify-center",
        isDarkMode ? "bg-darkbg" : "bg-normalbg",
        "transition-opacity duration-700 ease-out",
        leaving ? "opacity-0" : "opacity-100",
      ].join(" ")}
      aria-hidden={leaving ? "true" : "false"}
    >
      <div className="flex flex-col items-center gap-6 px-6">
        <img
          src={src}
          alt={alt}
          className={[
            "w-[680px] max-w-[92vw] select-none",
            "transition-transform duration-700 ease-out",
            leaving ? "scale-95" : "scale-100",
            "drop-shadow-[0_12px_45px_rgba(54,130,174,0.35)]",
          ].join(" ")}
          style={{
            filter:
              "brightness(1.55) contrast(1.15) saturate(1.2) drop-shadow(0 0 28px rgba(255,255,255,0.18))",
          }}
          draggable="false"
        />
        {showText ? (
          <p className="text-lg font-semibold text-primary dark:text-white/90">
            Loading…
          </p>
        ) : null}
      </div>
    </div>
  );
}

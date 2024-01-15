import imagemin from "imagemin";
import imageminWebp from "imagemin-webp";

(async () => {
  const files = await imagemin(["sources/*.{jpg,png}"], {
    destination: "build/images",
    plugins: [imageminWebp()],
  });
})();

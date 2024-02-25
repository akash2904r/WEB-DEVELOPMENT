import Image from "next/image";

export default function Home() {
  return (
    <div>
      I am Home

      {/* The size of the given image is 117kb */}
      {/* <img className="m-auto" src="https://w0.peakpx.com/wallpaper/519/912/HD-wallpaper-zoro-enma-enma-one-piece-pirate-pirate-hunter-pirates-roronoa-roronoa-zoro-shimotsuki-sword-zoro.jpg" alt="Zoro" /> */}

      {/* The size of the same image as in img tag is 230b */}
      <Image className="m-auto" width={400} height={400} src="https://w0.peakpx.com/wallpaper/519/912/HD-wallpaper-zoro-enma-enma-one-piece-pirate-pirate-hunter-pirates-roronoa-roronoa-zoro-shimotsuki-sword-zoro.jpg" />
    </div>
  );
}

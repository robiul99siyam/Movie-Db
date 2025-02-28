import Image from "next/image";
import Link from "next/link";

export default function TrendingNowItem() {
  return (
    <div class="flex-shrink-0 w-48 cursor-pointer hover:scale-105 transition-transform">
      <Link href="details.html">
        <Image
          src="https://image.tmdb.org/t/p/original/ht8Uv9QPv9y7K0RvUyJIaXOZTfd.jpg"
          alt="Smile 2"
          class="w-full rounded-lg"
          width={200}
          height={300}
        />
        <div class="mt-2">
          <h3 class="text-light text-sm font-bold truncate">Smile 2</h3>
          <p class="text-primary text-xs">2023</p>
        </div>
      </Link>
    </div>
  );
}

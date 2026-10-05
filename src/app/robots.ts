import type { MetadataRoute } from "next";

// Se genera en el build como out/robots.txt
export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/" },
    sitemap: "https://carlosalbertoxw.com/sitemap.xml",
  };
}

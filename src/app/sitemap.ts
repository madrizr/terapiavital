// app/sitemap.js

export default function sitemap() {
  const baseUrl = "https://acupunturavital.uno";

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/tratamientos`,
      lastModified: new Date(),
    },
  ];
}

const year = document.querySelector("#year");
const bookingEmbed = document.querySelector("#bookingEmbed");
const bookingLink = document.querySelector("#bookingLink");
const bookingUrl = "https://calendly.com/excelnotary06";

year.textContent = new Date().getFullYear();

if (bookingEmbed && bookingLink && bookingUrl) {
  bookingLink.href = bookingUrl;
  bookingLink.target = "_blank";
  bookingLink.rel = "noopener";

  bookingEmbed.innerHTML = "";
  const frame = document.createElement("iframe");
  frame.title = "Book an appointment with Excel Notary";
  frame.src = `${bookingUrl}?hide_gdpr_banner=1&primary_color=11365b`;
  frame.loading = "lazy";
  bookingEmbed.append(frame);
}

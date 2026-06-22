const year = document.querySelector("#year");
const requestForm = document.querySelector("#requestForm");

year.textContent = new Date().getFullYear();

requestForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const data = new FormData(requestForm);
  const name = data.get("name") || "";
  const phone = data.get("phone") || "";
  const location = data.get("location") || "";
  const time = data.get("time") || "";
  const details = data.get("details") || "";

  const subject = encodeURIComponent("Notary appointment request");
  const body = encodeURIComponent(
    [
      "New notary appointment request:",
      "",
      `Name: ${name}`,
      `Phone: ${phone}`,
      `City or ZIP: ${location}`,
      `Preferred date/time: ${time}`,
      "",
      "Document details:",
      details,
    ].join("\n"),
  );

  window.location.href = `mailto:excelnotary06@gmail.com?subject=${subject}&body=${body}`;
});

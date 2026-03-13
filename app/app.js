async function showMessage() {

    const response = await fetch("/api/hello");
    const data = await response.json();

    document.getElementById("message").innerText =
        data.message;
}
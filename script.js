async function runScan(){

    const data = await fetch("https://ipapi.co/json/")
    .then(res => res.json());

    document.getElementById("ip").innerText =
    data.ip;

    document.getElementById("country").innerText =
    data.country_name;

    document.getElementById("city").innerText =
    data.city;

    document.getElementById("isp").innerText =
    data.org;

    document.getElementById("browser").innerText =
    navigator.userAgent;

    document.getElementById("device").innerText =
    navigator.platform;

    pingTest();
}

async function pingTest(){

    const start = Date.now();

    await fetch("https://www.google.com/favicon.ico",{
        mode:"no-cors"
    });

    const end = Date.now();

    document.getElementById("ping").innerText =
    (end-start)+" ms";
}
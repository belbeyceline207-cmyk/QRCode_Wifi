const form = document.getElementById("wifiForm");
const qrContainer = document.getElementById("qrcode");
const clearBtn = document.getElementById("clearBtn");

form.addEventListener("submit", function(event) {
    event.preventDefault();

    const ssid = document.getElementById("ssid").value;
    const password = document.getElementById("password").value;

    // Gestion des caractères spéciaux
    const escapeWifi = value =>
        value.replace(/([\\;,:"])/g, "\\$1");

    // Format de connexion Wi-Fi
    const wifiData = "WIFI:T:WPA;S:" + escapeWifi(ssid)
                   + ";P:" + escapeWifi(password) + ";;";

    // Génération du QR Code
    qrContainer.innerHTML = "";

    new QRCode(qrContainer, {
        text: wifiData,
        width: 200,
        height: 200
    });

    clearBtn.hidden = false;
});

// Effacement du QR Code
clearBtn.addEventListener("click", function() {
    qrContainer.innerHTML = "";
    clearBtn.hidden = true;
});

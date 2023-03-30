const arrow = document.querySelector('.arrow');
    const speed = document.querySelector('.speed-value');
    const posX = document.querySelector('.positionX');
    const posY = document.querySelector('.positionY');
    console.log(posX, posY);

    navigator.geolocation.watchPosition(data => {
      console.log(data);
      speed.textContent = data.coords.speed;
      if (speed.textContent === '') {
        speed.textContent = 0;
      }
      arrow.style.transform = `rotate(${data.coords.heading}deg)`;

      posX.textContent = `Longitude: ${Math.round(data.coords.longitude * 100) / 100}`;
      posY.textContent = `Latitude: ${Math.round(data.coords.latitude * 100) / 100}`;

    }, (err) => {
      console.log(err);
      alert('You need to allow localization to use all the features');
    });
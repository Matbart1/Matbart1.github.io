
    var images = ['MyWeb/Images/Bird.JPG',
    'MyWeb/Images/Rocks.JPG',
    'MyWeb/Images/Squirrel.JPG',
    'MyWeb/Images/Bunny.jpg',
    'MyWeb/Images/City.jpg',
    'MyWeb/Images/Fern.jpg',
    'MyWeb/Images/moon.jpg',
    'MyWeb/Images/moth.jpg',
    'MyWeb/Images/night.jpg',
    'MyWeb/Images/sunset.jpg',
    'MyWeb/Images/wood.jpg',
    'MyWeb/Images/land.jpg',
    'MyWeb/Images/forest.jpg'];
    var index = -1;
    const reader = document.querySelector('.ssBtn');
    reader.addEventListener('click', displayImage);

    function displayImage(imgArray)
    {
        index++;
        document.slide.src = images[index];  
        if(index > 11)
        {
            index = -1;
        }
    }

    displayImage(images);

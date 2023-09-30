
    var images = ['MyWeb/Images/Bird.JPG',
    'MyWeb/Images/Rocks.JPG',
    'MyWeb/Images/Squirrel.JPG',
    'MyWeb/Images/Bunny.jpg',
    'MyWeb/Images/City.jpg',
    'MyWeb/Images/Fern.jpg',
    'MyWeb/Images/Moon.jpg',
    'MyWeb/Images/Moth.jpg',
    'MyWeb/Images/Night.jpg',
    'MyWeb/Images/Sunset.jpg',
    'MyWeb/Images/Wood.jpg',
    'MyWeb/Images/Land.jpg',
    'MyWeb/Images/Forest.jpg'];

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

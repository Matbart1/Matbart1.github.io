
    var images = ['MyWeb/Images/Bird.JPG',
    'MyWeb/Images/Rocks.JPG',
    'MyWeb/Images/Squirrel.JPG',
    'MyWeb/Images/Bunny.JPG',
    'MyWeb/Images/City.JPG',
    'MyWeb/Images/Fern.JPG',
    'MyWeb/Images/Moon.JPG',
    'MyWeb/Images/Moth.JPG',
    'MyWeb/Images/Night.JPG',
    'MyWeb/Images/Sunset.JPG',
    'MyWeb/Images/Wood.JPG',
    'MyWeb/Images/Land.JPG',
    'MyWeb/Images/Forest.JPG'];

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

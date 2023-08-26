const coursesData = [
  {
    course: 'Web Development Fundamentals',
    description: 'Learn the basics of web development, HTML, CSS, and JavaScript.',
    category: 'Web Development',
    price: 1000,
    image: 'https://images.pexels.com/photos/270632/pexels-photo-270632.jpeg?auto=compress&cs=tinysrgb&w=600',
    saved: false
  },
  {
    course: 'JavaScript Mastery',
    description: 'Become a JavaScript expert with in-depth coverage of advanced topics.',
    category: 'Web Development',
    price: 6999,
    image: 'https://images.pexels.com/photos/5474299/pexels-photo-5474299.jpeg?auto=compress&cs=tinysrgb&w=600',
    saved: false
  },
  {
    course: 'Full Stack Development',
    description: 'Master both front-end and back-end development for modern applications.',
    category: 'Web Development',
    price: 9999,
    image: 'https://images.pexels.com/photos/316465/pexels-photo-316465.jpeg?auto=compress&cs=tinysrgb&w=600',
    saved: false
  },
  {
    course: 'Graphic Design Basics',
    description: 'Learn the fundamental principles of graphic design, including layout, typography, and color theory.',
    category: 'Graphic Design',
    price: 4499,
    image: 'https://images.pexels.com/photos/3183151/pexels-photo-3183151.jpeg?auto=compress&cs=tinysrgb&w=600',
    saved: false
  },
  {
    course: 'Advanced Photoshop Techniques',
    description: 'Take your Photoshop skills to the next level with advanced editing and manipulation techniques.',
    category: 'Graphic Design',
    price: 5999,
    image: 'https://images.pexels.com/photos/687668/pexels-photo-687668.jpeg?auto=compress&cs=tinysrgb&w=600',
    saved: false
  },
  {
    course: 'Digital Marketing Fundamentals',
    description: 'Explore the world of digital marketing, including SEO, social media, and content strategies.',
    category: 'Digital Marketing',
    price: 5499,
    image: 'https://images.pexels.com/photos/927022/pexels-photo-927022.jpeg?auto=compress&cs=tinysrgb&w=600',
    saved: false
  },
  {
    course: 'Social Media Marketing',
    description: 'Learn how to leverage social media platforms to grow your brand and engage with your audience.',
    category: 'Digital Marketing',
    price: 4999,
    image: 'https://images.pexels.com/photos/6078126/pexels-photo-6078126.jpeg?auto=compress&cs=tinysrgb&w=600',
    saved: false
  },
  {
      course: 'Cyber Security Fundamentals',
      description: 'Learn the basics of cyber security, including threats, vulnerabilities, and basic defense strategies.',
      category: 'Cyber Security',
      price: 5999,
      image: 'https://images.pexels.com/photos/3193498/pexels-photo-3193498.jpeg?auto=compress&cs=tinysrgb&w=600'
,       saved: false
    },
    {
      course: 'Ethical Hacking',
      description: 'Explore the world of ethical hacking and penetration testing to identify and secure vulnerabilities.',
      category: 'Cyber Security',
      price: 7999,
      image: 'https://images.pexels.com/photos/730560/pexels-photo-730560.jpeg?auto=compress&cs=tinysrgb&w=600'
,       saved: false
    },
    {
      course: 'Network Security',
      description: 'Master the techniques to secure computer networks from unauthorized access and attacks.',
      category: 'Cyber Security',
      price: 6999,
      image: 'https://images.pexels.com/photos/3193924/pexels-photo-3193924.jpeg?auto=compress&cs=tinysrgb&w=600'
,       saved: false
    },
    {
      course: 'Introduction to Cloud Computing',
      description: 'Learn the basics of cloud computing, including different service models and deployment models.',
      category: 'Cloud Computing',
      price: 4499,
      image: 'https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg?auto=compress&cs=tinysrgb&w=600'
,       saved: false
    },
    {
      course: 'AWS Essentials',
      description: 'Explore Amazon Web Services (AWS) and its core services for cloud infrastructure.',
      category: 'Cloud Computing',
      price: 5999,
      image: 'https://images.pexels.com/photos/3657062/pexels-photo-3657062.jpeg?auto=compress&cs=tinysrgb&w=600'
,       saved: false
    },
    {
      course: 'Microsoft Azure Fundamentals',
      description: 'Get started with Microsoft Azure and its cloud computing services and solutions.',
      category: 'Cloud Computing',
      price: 5499,
      image: 'https://images.pexels.com/photos/1695735/pexels-photo-1695735.jpeg?auto=compress&cs=tinysrgb&w=600'
,       saved: false
    },
    {
      course: 'Google Cloud Platform Basics',
      description: 'Learn the basics of Google Cloud Platform (GCP) and its various tools and services.',
      category: 'Cloud Computing',
      price: 5999,
      image: 'https://images.pexels.com/photos/87484/pexels-photo-87484.jpeg?auto=compress&cs=tinysrgb&w=600'
,       saved: false
    },
    {
      course: 'Data Analysis Fundamentals',
      description: 'Learn the basics of data analysis, including data cleaning, visualization, and basic statistical techniques.',
      category: 'Data Analysis',
      price: 5499,
      image: 'https://images.pexels.com/photos/3184414/pexels-photo-3184414.jpeg?auto=compress&cs=tinysrgb&w=600'
,       saved: false
    },
    {
      course: 'Advanced Excel for Data Analysis',
      description: 'Master Excel for data manipulation and analysis, including complex formulas and pivot tables.',
      category: 'Data Analysis',
      price: 5999,
      image: 'https://images.pexels.com/photos/1191637/pexels-photo-1191637.jpeg?auto=compress&cs=tinysrgb&w=600'
,       saved: false
    },
    {
      course: 'Introduction to Python for Data Analysis',
      description: 'Get started with Python programming for data analysis, covering libraries like Pandas and Matplotlib.',
      category: 'Data Analysis',
      price: 6999,
      image: 'https://images.pexels.com/photos/2397753/pexels-photo-2397753.jpeg?auto=compress&cs=tinysrgb&w=600'
,       saved: false
    },
    {
      course: 'Data Visualization with Tableau',
      description: 'Explore data visualization using Tableau to create interactive and informative visualizations.',
      category: 'Data Analysis',
      price: 6499,
      image: 'https://images.pexels.com/photos/2690770/pexels-photo-2690770.jpeg?auto=compress&cs=tinysrgb&w=600'
,       saved: false
    }
  ];

const sidebar = document.getElementById('sidebar');
const header = document.getElementById('header');

sidebar.addEventListener('click', function(){
    header.classList.toggle('hide');
})

const courses = document.getElementById('courses');

//GETTING THE SPAN FOR CART NUMBER FROM HTML
const cartNumber = document.getElementById('cartNumber');
//GETTING THE SPAN FOR SAVED NUMBER FROM HTML
const savedNumber = document.getElementById('savedNumber');

//CREATING AN EMPTY ARRAY FOR CART ITEMS
const cartItems = [];
//CREATING AN EMPTY ARRAY FOR SAVED ITEMS
const savedItems = [];

savedNumber.textContent = savedItems.length;
cartNumber.textContent = cartItems.length;

const keepCourse = (keepArray, keepNumber, keep, i)=>{
  const duplicate = keepArray.filter((item)=>{
    if(item.course === coursesData[i].course){
      return item;
    }
  })

  if(duplicate.length != 0){
    alert(`COURSE ALREADY EXISTS IN ${keep}`);
  }else{
    keepArray.push(coursesData[i]);
    keepNumber.textContent = keepArray.length;
    alert(`COURSE ADDED TO ${keep} SUCCESSFULLY`);
  }
}

const createCourses = (selectedArray)=>{
  for(let i=0; i<selectedArray.length; i++){
      //CREATING A DIV FOR EACH COURSE
      const card = document.createElement('div');
      card.setAttribute('class', 'card');
    
      //PUTTING THE CARD DIV WHICH I JUST CREATED INTO THE DIV I REFERENCED FROM THE HTML FILE.
      courses.appendChild(card);
    
      //CREATING THE IMAGE TO SAVE A COURSE
      const saveCourse = document.createElement('img');
      saveCourse.setAttribute('class', 'icon');
      saveCourse.setAttribute('alt', 'heart');
      saveCourse.setAttribute('src', 'https://cdn4.iconfinder.com/data/icons/ionicons/512/icon-ios7-heart-outline-64.png');


      card.appendChild(saveCourse);

      saveCourse.addEventListener('click', ()=>{
        const duplicate = savedItems.filter((item)=>{
          if(item.course === coursesData[i].course){
            return item;
          }
        })

        if(duplicate.length != 0){
          const duplicatePosition = savedItems.indexOf(duplicate[0]);
          savedItems.splice(duplicatePosition,1);
          savedNumber.textContent = savedItems.length;
          alert('COURSE REMOVED FROM SAVED ITEMS');
          saveCourse.style.backgroundColor = 'white';
        }else{
          savedItems.push(coursesData[i]);
          savedNumber.textContent = savedItems.length;
          alert(`COURSE SAVED SUCCESSFULLY`);
          saveCourse.style.backgroundColor = 'rgb(251, 214, 220)';
        }
        
      })

      //CREATING AN IMAGE FOR EACH COURSE
      const cardImg = document.createElement('img');
    
      //SETTING THE ATTRIBUTES FOR THE IMAGES
      cardImg.setAttribute('src', `${selectedArray[i].image}`);
      cardImg.setAttribute('alt', 'Card Image');
      cardImg.setAttribute('class', 'card-img');
    
      //PUTTING THE IMAGE INSIDE THE DIV I JUST CREATED (CARD).
      card.appendChild(cardImg)
    
      //CREATING ANOTHER DIV (CARD BODY)
      const cardBody = document.createElement('div');
      cardBody.setAttribute('class', 'card-body');
    
      //PUTTING THE CARD BODY INSIDE THE CARD
      card.appendChild(cardBody);
    
      //CREATING ANOTHER DIV (TITLE
      const title = document.createElement('div');
      title.setAttribute('class', 'title');
    
      //PUT MY TITLE INSIDE CARD BODY
      cardBody.appendChild(title);
    
      //CREATING 2 PARAGRAPHS
      const paragraph1 = document.createElement('p');
      const paragraph2 = document.createElement('p');
    
      //PUTTING THE 2 PARAGRAPHS INSIDE MY TITLE DIV
      title.appendChild(paragraph1);
      title.appendChild(paragraph2);
    
      //GIVING THE PARAGRAPHS CONTENT
      paragraph1.textContent = `${selectedArray[i].course}`;
      paragraph2.textContent = `#${selectedArray[i].price}`
    
      //CREATING A PARAGRAPH FOR COURSE DESCRIPTION
      const description = document.createElement('p');
      description.setAttribute('class', 'description');
      description.textContent = `${selectedArray[i].description}`;
      cardBody.appendChild(description);
    
      //CREATING THE BUTTON
      const addButton = document.createElement('button');
      addButton.textContent = 'Add to cart';
      cardBody.appendChild(addButton);

      addButton.addEventListener('click', ()=>{
          if(cartItems.length ==5){
            alert('CART ALREADY FULL');
            return;
          }
          keepCourse(cartItems,cartNumber, 'CART', i);
      })
    
    }
}


createCourses(coursesData);

const searchInput = document.getElementById('searchInput');
const searchButton = document.getElementById('searchButton');

searchButton.addEventListener('click', ()=>{
  const searchedItem = searchInput.value;

  const correctItem = coursesData.filter((course) =>{
    if(course.course.toLowerCase().includes(searchedItem.toLowerCase())){
      return course;
    }
  })

  courses.innerHTML = '';
  createCourses(correctItem);
})

const categories = document.getElementById('categories');
categories.addEventListener('change', ()=>{
  const selectedOption = categories.value;
  
  const correctItems = coursesData.filter((course)=>{
    if(course.category == selectedOption){
      return course;
    }
  })

  courses.innerHTML = "";
  createCourses(correctItems);
})



const createObject = (object)=>{
  const created = document.createElement(`${object}`);
  return created;
}

const CART_ITEMS = document.getElementById('CART_ITEMS');
const CART_BUTTON = document.getElementById('CART_BUTTON');

const ALLITEMS = document.getElementById('ALLITEMS');

const TOTAL_PRICE = document.getElementById('TOTAL_PRICE');

const allPrices = [];


CART_BUTTON.addEventListener('click', ()=>{
  CART_ITEMS.classList.toggle('invisible');
  for(let i=0; i<cartItems.length; i++){
    let amount = 1;
    const items = document.createElement('div');
    items.setAttribute('class', 'items');
    ALLITEMS.appendChild(items);
    
    const left = document.createElement('div');
    left.setAttribute('class', 'left');
  
    items.appendChild(left);
  
    const cartImg = document.createElement('img');
    cartImg.setAttribute('src', `${cartItems[i].image}`)
    cartImg.setAttribute('alt', `${cartItems[i].course}`)
    cartImg.setAttribute('class', 'small')
  
    const cartTitle = document.createElement('p')
    cartTitle.textContent = `${cartItems[i].course}`
  
    left.appendChild(cartImg);
    left.appendChild(cartTitle);
  
    const middle = document.createElement('div');
    middle.setAttribute('class', 'middle');
    items.appendChild(middle);
  
    const cartButton1 = createObject('button');
    const cartAmount = createObject('span');
    const cartButton2 = createObject('button');
    
    
    
    cartButton1.textContent = '+';
    cartButton2.textContent = '-';
    cartAmount.textContent = amount;
    if(amount <= 1){
      cartButton2.disabled = true;
    }else{
      cartButton2.disabled = false;
    }
  
    middle.appendChild(cartButton1);
    middle.appendChild(cartAmount);
    middle.appendChild(cartButton2);
  
    const right = document.createElement('div');
    right.setAttribute('class', 'right');
    items.appendChild(right)
  
    const cartPrice = createObject('p');
    cartPrice.textContent = `#${cartItems[i].price}`;

    right.appendChild(cartPrice);

    cartButton1.addEventListener('click', ()=>{
      amount = amount + 1;
      cartAmount.textContent = amount;

      cartItems[i].price = amount * cartItems[i].price;
      cartPrice.textContent = `#${cartItems[i].price}`;

      cartButton2.disabled = false;
    })
    cartButton2.addEventListener('click', ()=>{
      if(amount <= 1){
        cartButton2.disabled = true;
        return;
      }else{
        cartButton2.disabled = false;
      }
      amount = amount - 1;
      cartAmount.textContent = amount;

      cartItems[i].price = amount * cartItems[i].price;
      cartPrice.textContent = `#${cartItems[i].price}`;

      // const AMOUNT = cartItems[i].price * amount;
      // cartPrice.textContent = `#${AMOUNT}`
    })
  }
})



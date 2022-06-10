const projects=[
    {title:"calculator",
     date:"09/06/2022",
     desc:"html/css/javascript",
     img:"https://picsum.photos/200/300/?blur=1",
  },
    {title:"book_review",
     date:"09/04/2022",
     desc:"html/css",
     img:"https://picsum.photos/200/300/?blur=2",
  },
    {title:"cproject3",
     date:"09/06/2022",
     desc:"html/css/javascript",
     img:"https://picsum.photos/200/300/?blur=1",
  },
    {title:"project4",
     date:"09/06/2022",
     desc:"html/css/javascript",
     img:"https://picsum.photos/200/300/?blur=1",
  },
  ];
  const testimonials=[
    {name:"smangele",
     comment:"Lorem ipsum", 
    },
    {name:"sindile",
     comment:"lorem ipsum",
    }
  ];
  // loop
  for(let i = 0; i < projects.length; i++){
    document.querySelector("#projects").innerHTML+=`
    <img onclick="toggleActive('#project${i}')" src=${projects[i].img}>
     <div class="modal" id="project${i}">
       <button onclick="toggleActive('#project${i}')">
         close</button>${projects[i].title}
     </div>
    `;
  }
  function toggleActive(el){
    document.querySelector(el).classList.toggle("active")
  }
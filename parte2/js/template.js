 const template = document.getElementById("card-template");
  const contenedor = document.getElementById("contenedor");
  const imagen = document.getElementById("miImagen");


  const productos = [
    {titulo: "Laptop", desc: "16GB RAM", price : 10000000, image: "imagenes/pc.jpg"},
    {titulo: "Mouse", desc: "Inalámbrico", price : 10000000, image:"imagenes/mouse.jpg"},
    {titulo: "Audifonos", desc: "Inalámbrico", price : 10000000,  image:"imagenes/AudifonosAirpodsMAXInEarP903.webp"},
    {titulo: "Celular", desc: "Inalámbrico", price : 10000000,image:"imagenes/celular.png"},
    {titulo: "Tablet", desc: "Inalámbrico", price : 10000000,image:"imagenes/tablet.webp"},
    

  ];

  productos.forEach(producto => {
    const clon = template.content.cloneNode(true);
    clon.querySelector(".title").textContent = producto.titulo;
    clon.querySelector(".desc").textContent = producto.desc;
    clon.querySelector(".price").textContent = producto.price.toLocaleString("Es-Co");
    clon.querySelector("img").src = producto.image;
    clon.querySelector("img").title = producto.desc;
    
    
    
    contenedor.appendChild(clon);
  });

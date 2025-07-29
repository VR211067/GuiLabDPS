'use client';  
import React from 'react'; 
import { useDispatch } from 'react-redux'; 
import { addToCart } from '../redux/cartSlice'; 
import '../styles/product-grid.css';

const products = [   
    {     
        id: 1,     
        title: 'TV LED 32',     
        price: 100,     
        image: 'https://i5.walmartimages.com/asr/b2686282-1fc3-4936-9758-552e95aa4419_1.83e29dcc21b46f87f1241ba6993a85f6.jpeg',     
        quantity: 1   
    }, 

    { 
        id: 2, 
    title: 'Reproductor Blu-Ray', 
    price: 100, 
    image: 'https://sony.scene7.com/is/image/sonyglobalsolutions/DVD%20Players%20golden-area-DVP-SR170?$goldenAreaImage$', 
    quantity: 1 
    }, 
    { 
        id: 3, 
        title: 'Cámara de Videovigilancia', 
        price: 100, 
        image: 'https://apizd.zonadigitalsv.com/storage/productos/B7VmAmNtkDGAeg1c17AHChPUy4Sy9KsOidy6HL5h.jpg', 
        quantity: 1 
        }, 
        { 
            id: 4, 
            title: 'Mini proyector portátil', 
            price: 100, 
            image: 'https://siman.vtexassets.com/arquivos/ids/6773720/image-01cd832429424c9396cdfcf47aa6bfc0.jpg?v=638793137407830000', 
            quantity: 1 
        }, 
        { 
            id: 5, 
            title: 'Bocina Bluetooth portátil', 
            price: 150, 
            image: 'https://acdn-us.mitiendanube.com/stores/001/568/276/products/bocina_tx1-55c7d4fa4e006a551716491947554459-240-0.png', 
            quantity: 1 
            },
            { 
            id: 6, 
            title: 'Audífonos inalámbricos', 
            price: 150, 
            image: 'https://www.radioshackla.com/media/catalog/product/4/5/454792300013_1.jpg?optimize=medium&bg-color=255,255,255&fit=bounds&height=700&width=700&canvas=700:700', 
            quantity: 1 
            },
            { 
            id: 7, 
            title: 'Radio AM/FM digital', 
            price: 150, 
            image: 'https://www.radioshackla.com/media/catalog/product/1/2/1202237.jpg?optimize=medium&bg-color=255,255,255&fit=bounds&height=700&width=700&canvas=700:700', 
            quantity: 1 
            },
            { 
            id: 8, 
            title: 'Sistema de sonido 2.1', 
            price: 150, 
            image: 'https://xht.com.sv/wp-content/uploads/2023/09/Imagen-de-WhatsApp-2023-05-16-a-las-14.23.22.jpg', 
            quantity: 1 
            },
             { 
            id: 9, 
            title: 'Smartphone Genérico 6"', 
            price: 200, 
            image: 'https://preview.free3d.com/img/2019/02/2279590685810099630/hltmar73.jpg', 
            quantity: 1 
            },
             { 
            id: 10, 
            title: 'Tableta 10"', 
            price: 200, 
            image: 'https://www.ubuy.sv/productimg/?image=aHR0cHM6Ly9tLm1lZGlhLWFtYXpvbi5jb20vaW1hZ2VzL0kvNzFNdDRKQVpRdEwuX0FDX1NMMTUwMF8uanBn.jpg', 
            quantity: 1 
            },
             { 
            id: 11, 
            title: 'Smartwatch', 
            price: 200, 
            image: 'https://www.radioshackla.com/media/catalog/product/5/0/5099010494_6.jpg?optimize=medium&bg-color=255,255,255&fit=bounds&height=700&width=700&canvas=700:700', 
            quantity: 1 
            },
             { 
            id: 12, 
            title: 'Lector de código de barras', 
            price: 200, 
            image: 'https://www.steren.com.sv/media/catalog/product/cache/0236bbabe616ddcff749ccbc14f38bf2/image/195860032/lector-de-codigo-de-barras-y-qr-2d-usb.jpg', 
            quantity: 1 
            }, { 
            id: 13, 
            title: 'Microondas 20L', 
            price: 250, 
            image: 'https://d1pjg4o0tbonat.cloudfront.net/content/dam/midea-aem/mx/cocina/microondas/horno-de-microondas-07-pies-cubicos-20-l-silver-mirror-practia/gallery1.jpg/jcr:content/renditions/cq5dam.web.5000.5000.jpeg', 
            quantity: 1 
            }, 
             { 
            id: 14, 
            title: 'Refrigeradora compacta', 
            price: 250, 
            image: 'https://siman.vtexassets.com/arquivos/ids/1148461/101915502.jpg?v=637499770124070000', 
            quantity: 1 
            },
             { 
            id: 15, 
            title: 'Licuadora 1.5L', 
            price: 250, 
            image: 'https://siman.vtexassets.com/arquivos/ids/5902274-800-800?v=638551251939000000&width=800&height=800&aspect=true', 
            quantity: 1 
            },
             { 
            id: 16, 
            title: 'Cafetera eléctrica', 
            price: 250, 
            image: 'https://walmartsv.vtexassets.com/arquivos/ids/593644/57531_01.jpg?v=638665108810400000', 
            quantity: 1 
            },
             { 
            id: 17, 
            title: 'Escritorio de oficina', 
            price: 300, 
            image: 'https://construmarket-sv.myshopify.com/cdn/shop/products/ESCRITORIOLODI1.50X0_dde77f45-990a-4e3f-92b1-356067f936fe.jpg?v=1604592980', 
            quantity: 1 
            },
             { 
            id: 18, 
            title: 'Silla ergonómica', 
            price: 300, 
            image: 'https://m.media-amazon.com/images/I/71vaJHRDbwL._AC_SL1500_.jpg', 
            quantity: 1 
            }, { 
            id: 19, 
            title: 'Estantería de 5 niveles', 
            price: 300, 
            image: 'https://sv.epaenlinea.com/media/catalog/product/cache/e28d833c75ef32af78ed2f15967ef6e0/3/1/3108df23-fa9c-4216-a15b-943c8debdd58.jpg', 
            quantity: 1 
            },
             { 
            id: 20, 
            title: 'Mesa de comedor 4 puestos', 
            price: 300, 
            image: 'https://www.almacenestropigas.com.sv/media/catalog/product/4/6/462585600011_00.jpg?optimize=medium&bg-color=255,255,255&fit=bounds&height=1000&width=1000&canvas=1000:1000', 
            quantity: 1 
            } 
        ]; 
            
            const ProductGrid = () => { 
                const dispatch = useDispatch(); 
                return ( 
                <div className="product-grid"> 
                {products.map(product => ( 
                    <div key={product.id} className="product-card">  
                    <img src={product.image} alt={product.title} />           
                    <h3>{product.title}</h3>           
                    <p>${product.price}</p>           
                    <button onClick={() => dispatch(addToCart(product))}>             
                        Agregar al carrito           
                        </button>         
                        </div>       
                        ))}     
                        </div>   
                        ); 
                    };  
                    export default ProductGrid; 
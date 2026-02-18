(() => {
  interface IProduct {
    id: number;
    name: string;
  }

  class ProductService {
    getProduct(id: number) {
      console.log('Producto: ', { id, name: 'OLED Tv' });
    }

    saveProduct(product: IProduct) {
      console.log('Guardando en base de datos', product);
    }
  }

  class Notifications {
    private masterEmail: string = 'master@google.com';

    sendEmail(emailList: string[], template: 'to-clients' | 'to-admins') {
      console.log('Sending to ', template);
    }
  }

  class ProductBloc {
    notifyClients() {
      console.log('Enviando correo a los clientes');
    }
  }

  class CardBloc {
    addToCart(productId: number) {
      // Agregar al carrito de compras
      console.log('Agregando al carrito ', productId);
    }
  }

  const productBloc = new ProductBloc();
  const productService = new ProductService();
  const cardBloc = new CardBloc();

  productBloc.loadProduct(10);
  productBloc.saveProduct({ id: 10, name: 'OLED TV' });
  productBloc.notifyClients();
  cardBloc.addToCart(10);
})();

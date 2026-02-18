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
    private productService: ProductService;
    private notifications: Notifications;

    constructor(productService: ProductService, notifications: Notifications) {
      this.productService = productService;
      this.notifications = notifications;
    }

    loadProduct(id: number) {
      this.productService.getProduct(id);
    }

    saveProduct(product: IProduct) {
      this.productService.saveProduct(product);
    }

    notifyClients() {
      this.notifications.sendEmail(['some.user@email.com'], 'to-clients');
    }
  }

  class CardBloc {
    addToCart(productId: number) {
      console.log('Agregando al carrito ', productId);
    }
  }

  const productService = new ProductService();
  const notifications = new Notifications();

  const productBloc = new ProductBloc(productService, notifications);
  const cardBloc = new CardBloc();

  productBloc.loadProduct(10);
  productBloc.saveProduct({ id: 10, name: 'OLED TV' });
  productBloc.notifyClients();
  cardBloc.addToCart(10);
})();

export interface IBird {
  fly(): void;
  eat(): void;
  run(): void;
  swim(): void;
}

class Toucan implements IBird {
  public fly() {}
  public eat() {}
  public run() {}
  public swim() {
    throw new Error("can't swim");
  }
}

class HummingBird implements IBird {
  public fly() {}
  public eat() {}
  public run() {}
  public swim() {
    throw new Error("can't swim");
  }
}

class Ostrich implements IBird {
  fly() {
    throw new Error("can't fly");
  }
  public eat() {}
  public run() {}
  public swim() {
    throw new Error("can't swim");
  }
}

class Penguin implements IBird {
  fly() {
    throw new Error("can't fly.");
  }
  public eat() {}
  public run() {}
  public swim() {}
}

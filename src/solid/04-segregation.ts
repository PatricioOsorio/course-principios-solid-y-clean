// ! Interfaces
export interface IBird {
  eat(): void;
}

export interface IFlyingBird {
  fly(): void;
}

export interface ISwimmingBird {
  swim(): void;
}

export interface IRunningBird {
  run(): void;
}

// ! Classes
class Toucan implements IBird, IFlyingBird {
  public fly() {}
  public eat() {}
}

class HummingBird implements IBird, IFlyingBird {
  public fly() {}
  public eat() {}
}

class Ostrich implements IBird, IRunningBird {
  public eat() {}
  public run() {}
}

class Penguin implements IBird, ISwimmingBird {
  public eat() {}
  public swim() {}
}

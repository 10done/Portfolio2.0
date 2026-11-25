type Point = [number, number];
type Spring = { x: number; t: number };

declare const HL: {
  spring(value: number, options?: { k?: number; c?: number }): Spring;
  stepS(spring: Spring, seconds: number): boolean;
  register(stage: HTMLElement, tick: (seconds: number) => boolean): {
    wake(): void;
    unregister(): void;
  };
  pointer(stage: HTMLElement, handlers: {
    move(point: Point): void;
    leave(): void;
  }): () => void;
  tour(stage: HTMLElement, stops: (Point | null)[]): { stop(): void };
};

export default HL;

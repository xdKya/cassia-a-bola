class Edge {
  //propriedades
  constructor(x, y, w, h) {
    //this.
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;

    this.body = Bodies.rectangle(this.x, this.y, this.w, this.h, {
      isStatic: true,
    });
    World.add(world, this.body);
  }

  //funções

  show() {
    push()
    stroke(rgb(random(0, 255), random(0, 255), random(0, 255)));
    rectMode(CENTER);
    rect(this.body.position.x, this.body.position.y, this.w, this.h);
    pop()
  }
}

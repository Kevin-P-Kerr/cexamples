// struct + pointer dereferencing

struct Random {
  int x;
  int y;
};

int inc (struct Random  *x) { 
  return x->x + x->y;
};

int main(void) {
  struct Random r;
  r.x = 2;
  r.y = 2;
  int z = inc(&r);
  return z;
}

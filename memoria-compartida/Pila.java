 public class Pila {
   public static final int SIZE = 50;
   private int  current;
   private int[] stack;
   
   public Pila() {
     current = 0;
     stack = new int[50];
   }
   
   public void push(int i) {
     current++;
     if(current == (SIZE)) {
       System.out.println("Stack Overflow.\n");
       System.exit(1);
     }
     stack[current] = i;
   }
   
   public int pop() {
     if(current == 0) {
       System.out.println("Stack Underflow.\n");
       System.exit(1);
     }
     current--;
     return stack[current+1];
   }
   
   public static int main() {
     Pila s = new Pila();
     
     s.push(1);
     s.push(2);
     System.out.println("First value on top is %d\n" + s.pop());
     System.out.println("Second value on top is %d\n" + s.pop());
     System.out.println("Third value on top is %d\n" + s.pop());
     System.out.println("end\n");
     	
     return 0;
   }
 }

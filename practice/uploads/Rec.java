
public class Rec {

	public static String rec(int a) {
		if(a!=0) {
			return a+rec(a-1);
		}
		else
			return "0";
	}
	public static void main(String[] args) {
		System.out.println(rec(12));
	}
}

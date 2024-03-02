public class Main {
	public static String findMostFrequentItem(String[] items, int... counts) {
		int k=0;
		int location=0;
		System.out.println(counts.length);
		if(items.length!=counts.length | items.length==0) {
			throw new IllegalArgumentException();
		}
		for(int i=0;i<items.length;i++) {
			if(counts[i]>k) {
				k=counts[i];
				location=i;
			}
		}
		return items[location];
	}

public static void main(String[] args) {
	String a[]=new String[] {"A","B"};
	System.out.println(findMostFrequentItem(a));
}
}

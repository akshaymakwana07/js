#include<stdio.h>
void main(){

    int n;

    printf("enter number");
    scanf("%d",&n);

    int  prime=0;

    for(int i=2;i<=n/2;i++){

        if(n % i == 0 ){
            prime=1;
            break;
        }

    }

    if(prime==1){
        printf("not prime");
    }else{
        printf("prime");
    }


}
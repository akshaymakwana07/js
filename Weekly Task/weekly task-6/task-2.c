#include<stdio.h>
void main(){

    int n;

    printf("enter number");
    scanf("%d",&n);

    int first=0,last=1,sum;

    for(int i=1;i<=5;i++){
        sum=first+last;
        first=last;
        last=sum;
        printf("%d\n",sum);
    }

    

}
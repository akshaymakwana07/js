#include<stdio.h>
void main(){

    int n;

    int fact=1;

    printf("enter number:");
    scanf("%d",&n);

    

    for(int i=1;i<=n;i++){
        fact*=i;
    }

    printf(" factorial : %d",fact);

}
#include<stdio.h>
void mergesort(int a[],int l,int r){
    if(l<r){
       int m=l+(r-l)/2;
       
    }

}
int main(){

    int a[100],i,n;
    printf("Enter size");
    scanf("%d",&n);
    for(i=0;i<n;i++){
        scanf("%d",&a[i]);
    }
     mergesort(a,0,n-1);
    return 0;

}
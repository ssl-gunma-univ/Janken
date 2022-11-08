#include <stdio.h>
#include <stdlib.h>
#include <time.h>

int main(int argc, char* argv[]){
    char shape ='\0';
    char cshape = '\0';

    if(argc != 2) shape = 'o';
    else shape = argv[1][0];

    srand((unsigned int )time(NULL));
    int r = rand() % 3;
    if(r == 0) cshape = 'o';
    if(r == 1) cshape = 'v';
    if(r == 2) cshape = 'w';

    printf("あなたが出したのは");
    if(shape == 'o') printf("グーです\n");
    if(shape == 'v') printf("チョキです\n");
    if(shape == 'w') printf("パーです\n");

    printf("相手が出したのは");
    if(cshape == 'o') printf("グーです\n");
    if(cshape == 'v') printf("チョキです\n");
    if(cshape == 'w') printf("パーです\n");

    if(shape == cshape){
        printf("あいこ\n");
    }
    else{
        switch(shape){
        case 'o':
          if(cshape == 'v') printf("あなたの勝ち\n");
          else printf("あなたの負け\n");
          break;
        case 'v':
          if(cshape == 'w') printf("あなたの勝ち\n");
          else printf("あなたの負け\n");
          break;
        case 'w':
          if(cshape == 'o') printf("あなたの勝ち\n");
          else printf("あなたの負け\n");
          break;
        }
    }

    return 0;
}
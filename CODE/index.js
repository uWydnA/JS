
    // 入职薪水10K，每年涨幅5%，第50年工资多少
    var rate = 10;
    for(var i=0;i<50;i++)
    {
        rate *= 1.05;
    }
    console.log("入职薪水10K，每年涨幅5%，第50年工资为" + rate.toFixed() + "k(取整)");

    // 打印100以内7的倍数
    var result = []
    for(var i =0;i<Math.ceil(100/7);i++)
    {
        result[i] = i *7;
    }
    console.log(result);

    // /打印100以内的奇数
    var odd = [];
    for(var i=1;i<Math.round(100/2)+1;i++)
    {
        odd[i-1] = 2*i-1;        
    }
    console.log(odd);

    // 打印1～100所有数字的和
    var sum =0;
    for(var i=0;i<101;i++)
    {
        sum+=i;
    }
    console.log(sum);

    // 100以内所有偶数的和
    var even=[];
    for(var i=1;i<Math.round(100/2)+1;i++)
    {
        even[i-1] = 2*i;
    }
    console.log(even);

    // 提升：求出1/1-1/2+1/3-1/4…..1/100的和          var i=1;
    var sum =1;
    for(var i=2;i<101;i++)
    {
        if(i%2==0)
        {
            sum-=1/i;
        }
        else
        {
            sum+=1/i;
        }
    }
    console.log(sum);

    // 篮球从5米高的地方掉下来，每次弹起的高度是原来的30%，经过几次弹起，篮球的高度小于0.1米。（必须用到关键字break）
    var height =5;
    for(var i=1;;i++)
    {
        height = 0.3*height;
        if(height <0.1)
        {
            break;
        }
    }
    console.log("经过"+ i +"次弹起，篮球的高度小于0.1米")

    // 打印出1000-2000年中所有的闰年，并以每行四个数的形式输出（document.write）
    var years =1000;
    var count =0;
    for(var i=0;i<1001;i++)
    {
        if(years%4==0)
        {
            document.write(years + "   ")
            count++; 
            if(count % 4 == 0 && count!=0)
            {
                document.write("<br>")
            }
        } 
       
        years++;
    }

    // 尝试打印三角形
    //         ＊
    //         ＊＊
    //         ＊＊＊
    //         ＊＊＊＊
    //         ＊＊＊＊＊
    for(var i=0;i<6 ;i++)
    {
        for(var j=0;j<i;j++)
        {
            document.write("＊");
        }
        document.write("<br>");
    }

    // 计算10的阶乘
    var sum =1;
    for(var i=1;i<11;i++)
    {
        sum*=i;
    }
    console.log(sum);

    // 打印100–200之间所有能被3或者7整除的数
    var num=100;
    var nums=[];
    var j=0;
    for(var i=0;i<=100;i++)
    {
        if(num%3==0)
        {
            nums[j]=num;
            j++;
        }
        else if(num%7==0)
        {
            nums[j]=num;
            j++;
        }
        num++;
    }
    console.log(nums);

    // 计算20的阶乘
    var sum =1;
    for(var i=1;i<=20;i++)
    {
        sum*=i;
    }
    console.log(sum);

    // 求100-999之间的水仙花数。abc =++
    for(var i=100;i<=999;i++)
    {

        if(i == (Math.pow(parseInt(i/100),3) + Math.pow(parseInt(i%100/10),3) + Math.pow(i%10,3)))
        {
            console.log(i);
        }
    }

    // 求1+2!+3!+...+10!的值
    var sum =0;
    for(var i=1;i<=10;i++)
    {
        var cj=1;
        for(var j=1;j<=i;j++)
        {
            cj *=j;
        }
        sum+=cj;
    }
    console.log(sum);

    // 完成一个三角形打印功能

    for(var i=1;i<=7;i++)
    {
        for(var k=7;k>i;k--)
        {
            document.write("&nbsp;")
        }
        for(var j=1;j<=2*i+1;j++)
        {
            document.write("*");
        }
       
        document.write("<br>");
    }

    // 完成一个梯形打印功能
//      ***
//     *****
//    *******
//   *********
//  ***********
// *************
    for(var i=1;i<=7;i++)
    {
        for(var k=7;k>i;k--)
        {
            document.write("&nbsp;")
        }
        for(var j=1;j<=2*i+1;j++)
        {
            document.write("*");
        }
       
        document.write("<br>");
    }
    for(var i=1;i<=7;i++)
    {
        for(var k=7;k>i;k--)
        {
            document.write("&nbsp;")
        }
        for(var j=1;j<=2*i+1;j++)
        {
            document.write("*");
        }
       
        document.write("<br>");
    }
    

    for(var i=1;i<=4;i++)
    {
        for(var k=1;k<=7;k++)
        {
            document.write("&nbsp;");
        }
        for(var j=1;j<=3;j++)
        {
            document.write("*");
        }
        document.write("<br>");
    }

    // 有一个棋盘，有64个方格，在第一个方格里面放1粒芝麻重量是0.00001kg，第二个里面放2粒，第三个里面放4，棋盘上放的所有芝麻的重量
    var sums =0;
    for(var i=1;i<=64;i++)
    {
        var sum =1;
        for(var j=1;j<i;j++)
        {
            sum *=2;
        }
        sums+=sum;
    }
    console.log(parseFloat((sums*0.00001).toFixed(2)));

    // 拓展一：假设一个简单的ATM机的取款过程是这样的：首先提示用户输入密码（password），最多只能输入三次，超过3次则提示用户“密码错误，请取卡”结束交易。如果用户密码正确，再提示用户输入取款金额（amount），ATM机只能输出100元的纸币，一次取钱数要求最低100元，最高1000元。若用户输入的金额符合上述要求，则打印输出用户取得钱数，最后提示用户“交易完成，请取卡”，否则提示用户重新输入金额。假设用户密码是111111，请编程实现。
    
    




    // 拓展二：公园里有一只猴子和一堆桃子，猴子每天吃掉桃子总数的一半，把剩下一半中扔掉一个坏的。到第七天的时候，猴子睁开眼发现只剩下一个桃子。问公园里刚开始有多少个桃子？

    // 拓展三：大马驮2石粮食，中马驮1石粮食，两头小马驮一石粮食，要用100匹马，驮100石粮食，该如何调配？

    // 拓展假设某人有100,000现金.每经过一次路口需要进行一次交费. 交费规则为当他现金大于50,000时每次需要交5%如果现金小于等于50,000时每次交5,000.请写一程序计算此人可以经过多少次这个路口

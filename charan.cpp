#include <bits/stdc++.h>
using namespace std;
# define int long long 
 
int max(int a, int b) { return (a > b) ? a : b; }
int eggDrop(int n, int k)
{
    if (k == 1 || k == 0)
        return k;
    if (n == 1)
        return k;
    int min = INT_MAX, x, res;
    for (x = 1; x <= k; x++) {
        res = max(eggDrop(n - 1, x - 1), eggDrop(n, k - x));
        if (res < min)
            min = res;
    }
    return min + 1;
}

signed main()
{
    int t;
    while(cin>>t){
        int e,f;
        cin>>e>>f;
        cout<<eggDrop(e,f)<<"\n";
    }
}
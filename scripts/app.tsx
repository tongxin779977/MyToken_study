import * as React from 'react';
import { Button, Input } from '@mui/joy';
import { Web3 } from 'web3';
import { useState } from 'react';
import ABI from '../ABI.json' with { type: "json" };
import { assert } from 'console';

declare const window: any;


function App() {
    const [address, setAddress] = useState(null);
    const [web3, setWeb3] = useState<Web3 | null>(null);
    const [bankContract, setBankContract] = useState(0 as any);
    //连接web3钱包
    const connectWallet = async () => {
        if (typeof window !== 'undefined' && (window as any).ethereum) {
            const accounts = await (window as any).web3.eth.getAccounts();
            setAddress(accounts[0])
        }
        //连接web3
        const web3 = new Web3((window as any).ethereum);
        setWeb3(web3);

        //获取智能合约 ABI + 地址
        const bankContract = new web3.eth.Contract(ABI, '0x5D84b3bcF522Abe97608f65309eFd57eb847D635');
        setBankContract(bankContract);
    }

    return (
        <html>
            <head>
                <meta name="viewport" content="initial-scale=1, width=device-width" />
            </head><Button variant="solid">Hello world</Button>

            <h1>银行App</h1>
            <p>当前您的用户地址为:</p>
            <Button onClick={() => {
                console.log("点击了")
            }}>连接钱包</Button>
            <section>
                <input>
                    银行余额：
                </input>
                <Button
                    loading={false}
                    onClick={function () { }}
                    variant="solid"
                >查询</Button>
            </section>
            <section>
                <input>
                    金额：
                </input>
                <Button
                    loading={false}
                    onClick={function () { }}
                    variant="solid"
                >存钱</Button>
            </section>
            <section>
                <input>
                    金额：
                </input>
                <Button
                    loading={false}
                    onClick={function () { }}
                    variant="solid"
                >取钱</Button>
            </section>
            <section>
                <input>
                    金额：
                </input>
                <Button
                    loading={false}
                    onClick={function () { }}
                    variant="solid"
                >转账</Button>
            </section>
        </html>
    )
}
export default App;
// --- IGNORE ---   
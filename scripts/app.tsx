import * as React from 'react';
import { Button, Input } from '@mui/joy';
import { useState } from 'react';



function App() {
    const [address, setAddress] = useState(null);

    //连接web3钱包
    const connectWallet = async () => {
        const accounts = await window.ethereum.request({
            method: 'eth_requestAccounts',
        });

    }

    return (
        <div style={{ padding: '20px' }}>
            <h1>银行App</h1>
            <p>当前您的用户地址为: {address || '未连接'}</p>
            <Button onClick={connectWallet}>连接钱包</Button>

            <section style={{ marginTop: '20px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <span>银行余额：</span>
                    <Input placeholder="余额" />
                </div>
                <Button
                    onClick={function () { }}
                    variant="solid"
                    style={{ marginTop: '10px' }}
                >
                    查询
                </Button>
            </section>

            <section style={{ marginTop: '20px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <span>金额：</span>
                    <Input placeholder="存入金额" />
                </div>
                <Button
                    onClick={function () { }}
                    variant="solid"
                    style={{ marginTop: '10px' }}
                >
                    存钱
                </Button>
            </section>

            <section style={{ marginTop: '20px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <span>金额：</span>
                    <Input placeholder="取出金额" />
                </div>
                <Button
                    onClick={function () { }}
                    variant="solid"
                    style={{ marginTop: '10px' }}
                >
                    取钱
                </Button>
            </section>

            <section style={{ marginTop: '20px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <span>金额：</span>
                    <Input placeholder="转账金额" />
                </div>
                <Button
                    onClick={function () { }}
                    variant="solid"
                    style={{ marginTop: '10px' }}
                >
                    转账
                </Button>
            </section>
        </div>
    )
}

export default App;
import {createVerify} from 'crypto-browserify';
import {Buffer} from 'buffer'
import { utils } from 'ethers';
import BigNumber from 'bignumber.js';

import * as CodeMirror from 'codemirror/lib/codemirror';
import 'codemirror/mode/javascript/javascript'
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/mdn-like.css'

export default {
    name: "diceVerify",
    data: ()=>({
        activeTab: 'dice',
        editDicePublicKey: '',
        editDiceVerifyDatas: '',
    }),
    mounted(){
        this.editDicePublicKey = CodeMirror.fromTextArea(this.$refs.diceVerifyPublicKey, {
            mode:'javascript',
            theme:'mdn-like',
            showCursorWhenSelecting: true,
            cursorHeight: 1,
            lineWrapping: true,
            matchBrackets: true,
            smartIndent: true,
        });

        this.editDiceVerifyDatas = CodeMirror.fromTextArea(this.$refs.diceVerifyDatas, {
            //lineNumbers: true,
            mode:'javascript',
            theme:'mdn-like',
            showCursorWhenSelecting: true,
            cursorHeight: 1,
            lineWrapping: true,
            //foldGutter: true,
            //gutters: ["CodeMirror-linenumbers", "CodeMirror-foldgutter"],
            matchBrackets: true,
            smartIndent: true,
        });


        let editorWrap = document.getElementsByClassName("CodeMirror")[1];
        this.editDiceVerifyDatas.setValue('Please click the "CopyData" button from Dice Verify page to copy the data then paste here. Just like:\n{\n' +
            ' "WalletAddress":"TBK4YeBdYjAXgbskWE1XxPXngD9XuVh4RK",\n' +
            ' "Seed":43,\n' +
            ' "BetAmount":10,\n' +
            ' "RollType":"roll-under",\n' +
            ' "idData":"038b1a39a4470551202d9741111a6ede472e04551e6a127340c8bb1ce45f4808",\n' +
            ' "Signature":"03ef9df942484a2a85ab5513f674dca852e27e686be75ee8f241bdfa9e943d0b63d493a8134fd6cf08854a77259e75ffa954ec2e73eafc49dc5dd0a37d4a23338e1e1adbc4a852fa6599f898a1c5c0239ba30b77c56b2f62d5518a562c27312f0f22a85d2871afd211349b4c48cee1a9645e60d25a0150742bd4de48f7cac6c2"\n' +
            '}');
        editorWrap.onclick = ()=>{
            if (this.editDiceVerifyDatas.getValue()==='Please click the "CopyData" button from Dice Verify page to copy the data then paste here. Just like:\n{\n' +
                ' "WalletAddress":"TBK4YeBdYjAXgbskWE1XxPXngD9XuVh4RK",\n' +
                ' "Seed":43,\n' +
                ' "BetAmount":10,\n' +
                ' "RollType":"roll-under",\n' +
                ' "idData":"038b1a39a4470551202d9741111a6ede472e04551e6a127340c8bb1ce45f4808",\n' +
                ' "Signature":"03ef9df942484a2a85ab5513f674dca852e27e686be75ee8f241bdfa9e943d0b63d493a8134fd6cf08854a77259e75ffa954ec2e73eafc49dc5dd0a37d4a23338e1e1adbc4a852fa6599f898a1c5c0239ba30b77c56b2f62d5518a562c27312f0f22a85d2871afd211349b4c48cee1a9645e60d25a0150742bd4de48f7cac6c2"\n' +
                '}') {
                this.editDiceVerifyDatas.setValue('');
            }
        };
    },
    methods: {

        verifyLotteryNum(iddata, dealerPublicKey, signature) {
            const verifier = createVerify('RSA-SHA256');
            try {
                const verifySignatureResult = verifier.update(Buffer.from(iddata, 'hex')).verify(dealerPublicKey, Buffer.from(signature, 'hex'));
                if (verifySignatureResult) {
                    iziToast.success({
                        message: 'Verify Success!',
                        timeout: 2000,
                        position: "topRight"
                    });
                    let verifyResult = this.$refs.diceVerifyResult;
                    let result = ``;
                    let sig_timer = setTimeout(()=>{
                        result += `<li>○ Check signature <span class="success-sp">Success</span> !</li>`
                        verifyResult.innerHTML = result;
                        clearTimeout(sig_timer);
                    },500);
                    const _signature = utils.keccak256(Buffer.from(signature, 'hex')).toString().substring(2);
                    const n = BigNumber(_signature, 16);
                    let lotteryNumCalc = parseInt(n.mod(100).toFixed(0));
                    let luckynum_timer = setTimeout(()=>{
                        result += `<li>○ Result LuckyNumber is <span class="luckynum-sp">${lotteryNumCalc}</span> !</li>`
                        verifyResult.innerHTML = result;
                        clearTimeout(luckynum_timer);
                    },1500);
                    return true;
                } else {
                    iziToast.warning({
                        message: 'Verify Failed!',
                        timeout: 2000,
                        color: "red",
                        position: "topRight"
                    });
                    return false;
                }
            } catch (err) {
                console.log('err',err);
                iziToast.warning({
                    message: 'Verify Failed!',
                    timeout: 2000,
                    color: "red",
                    position: "topRight"
                });
                return false;
            }
        },
        clickToVerify(){
            let verifyResult = this.$refs.diceVerifyResult;
            verifyResult.innerText = '';
            let dealerPublicKey = this.editDicePublicKey.getValue();

            //handle to avoid useless spaces in the publicKey content
            if (dealerPublicKey) {
                dealerPublicKey = `-----BEGIN PUBLIC KEY-----${dealerPublicKey.substring(26,dealerPublicKey.length-24).replace(/\s+/g,"")}-----END PUBLIC KEY-----`;
            }
            let verifyDatas = {};
            try {
                verifyDatas = JSON.parse(this.editDiceVerifyDatas.getValue());
            } catch (err) {
                console.log('err',err);
                iziToast.warning({
                    message: 'Please click the "CopyData" button from Dice Verify page to copy the data then paste here!',
                    timeout: 3000,
                    color: "red",
                    position: "center"
                });
                return;
            }

            let iddata = verifyDatas['idData'];
            let signature = verifyDatas['Signature'];

            if (iddata&&dealerPublicKey&&signature) {
                this.verifyLotteryNum(iddata, dealerPublicKey, signature);
            }else {
                iziToast.warning({
                    message: "Please fill the correct data !",
                    timeout: 2000,
                    color: "red",
                    position: "topRight"
                });
            }
        }
    }
}

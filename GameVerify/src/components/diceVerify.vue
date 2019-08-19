<template>
    <div>
    <h3>
        Open Crypto Fate / Dice
    </h3>

        <h4>PublicKey Modulus</h4>
    <textarea name="modulus" class="modulus" spellcheck="false" ref="dicePublicKeyModulus">9CD00B8A47F449F9451BF8665909F597187925E10272AE96006175DC0C747EBEE3AFE42BAE37332536BF614FD01AB1F0DC5B2E6B0CE8D743B1DBB991F13E9573D9C561471BC4F9BC6F06ACBF7B7F9B448F23A306D31F93BF534EC7A5F908C499619EA37E4C3D8B9E8B9AA314639F0CA813837AC3B7B0768BF2D1D294835AAA4B
    </textarea>

        <h4>PublicKey Exponent</h4>
        <textarea name="exponent" class="exponent" spellcheck="false" ref="dicePublicKeyExponent">10001
        </textarea>

        <button class="generate-btn"
                @click="generatePublickey"
        >Generate PublicKey</button>

    <textarea spellcheck="false"
              name="public-key"
              class="public-key"
              ref="diceVerifyPublicKey"
    >You can click the button 'Generate PublicKey' to get publickey or copy from the verify page in the game.</textarea>

    <textarea name="other-datas"
              class="other-datas"
              placeholder="Paste the datas copied from Dice verify page here."
              ref="diceVerifyDatas"
              spellcheck="false"
    >
                </textarea>

    <div class="verify-part">
        <button class="verify-btn"
                @click="clickToVerify"
        >
            Verify</button>
        <img class="github-logo" src="../assets/githublogo.png" alt=""><a href="https://github.com/CryptoFate/Open-CryptoFate/blob/master/GameVerify/src/components/Dice.js" target="_blank">Dice.js</a>
    </div>

    <ul class="verify-result dice-result"
        ref="diceVerifyResult">
    </ul>
    </div>
</template>

<script src="./Dice.js"></script>

<style scoped>

</style>

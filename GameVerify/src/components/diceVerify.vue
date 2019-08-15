<template>
    <div>
    <h3>
        Open Crypto Fate / Dice
    </h3>
    <textarea spellcheck="false"
              name="public-key"
              class="public-key"
              ref="diceVerifyPublicKey"
    >-----BEGIN PUBLIC KEY-----MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQCc0AuKR/RJ+UUb+GZZCfWXGHkl4QJyrpYAYXXcDHR+vuOv5CuuNzMlNr9hT9AasfDcWy5rDOjXQ7HbuZHxPpVz2cVhRxvE+bxvBqy/e3+bRI8jowbTH5O/U07HpfkIxJlhnqN+TD2LnouaoxRjnwyoE4N6w7ewdovy0dKUg1qqSwIDAQAB-----END PUBLIC KEY-----</textarea>

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

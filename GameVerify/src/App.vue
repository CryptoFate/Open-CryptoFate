<template>
    <div id="app">

        <aside class="leftPart">

            <section class="top-section">
            <div class="logo">
                <span>Crypto</span>
                <span>Fate</span>
            </div>
            <h4><a href="https://cryptofate.io" target="_blank">https://cryptofate.io</a></h4>
            <h5>A decentralized,fair and trustful gaming platform.</h5>
            <hr>
            </section>

            <div class="github-wrap">
            <img class="github-logo" src="./assets/githublogo.png" alt=""><a href="https://github.com/CryptoFate/Open-CryptoFate">GitHub Repo</a>
            </div>

            <div class="tab dice-tab"
                 :class="{active:activeTab==='dice'}"
                 @click="clickToActiveTab('dice')">
                Dice
                <img class="verify-logo" src="./assets/verifylogo.png" alt="">

            </div>
        </aside>

        <section class="mainPart">
            <router-view></router-view>
        </section>


    </div>
</template>

<script>

    import diceVerify from './components/diceVerify'

    export default {
        name: 'app',
        components: {
            diceVerify,
        },
        data: ()=>({
            activeTab: 'dice',
        }),
        mounted(){
            this.$router.push('/dice');
        },
        methods: {
            clickToActiveTab(tab){
                this.activeTab = tab;
                this.$router.push(tab);
            },
        }
    }
</script>

<style lang="scss">
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        color: #2c3e50;
        margin-top: 20px;
        text-align: center;
        min-width: 900px;
    }


    a {
        color: #000;
    }

    .logo {
        font-size: 45px;
        font-weight: 300;
        text-transform: uppercase;
        span:first-child {
            color: grey;
            margin-right: 8px;
        }
        span:last-child {
            color: #d80927;
            font-weight: 700;
        }
    }

    .leftPart {
        position: fixed;
        left: 0;
        top: 0;
        height: 100%;
        width: 320px;
        text-align: right;
        background: #f8f8f8;

        .top-section {
            .logo {
                margin-top: 20px;
                text-align: center;
            }
            h4,h5 {
                margin-right: 20px;
            }

            hr {
                margin-left: 20px;
            }
        }

        .github-wrap {
            margin-right: 10px;
            margin-top: 20px;
            .github-logo {
                vertical-align: middle;
                width: 30px;
                height: 30px;
                margin-right: 10px;
            }
        }


        .tab {
            margin-top: 20px;
            padding: 10px;
            position: relative;
            cursor: pointer;

            .verify-logo {
                width: 30px;
                height: 30px;
                vertical-align: middle;
                margin-left: 5px;
            }

            &.active {
                background: #e5e5e5;
                &::after {
                    content: '';
                    position: absolute;
                    border: 12px solid transparent;
                    border-left: 10px solid #e5e5e5;
                    top: 0;
                    right: -22px;
                }
            }
        }
    }

    .mainPart {
        margin-left: 320px;
        padding: 30px;
        text-align: left;

        h3 {
            margin-top: -20px;
        }

        h4 {
            margin: 5px 0 -15px;
            color: #d80927;
        }

        .modulus {
            width: 100%;
            height: 40px!important;
        }

        .exponent {
            width: 100%;
        }

        .generate-btn {
            margin-top: 10px;
            padding: 10px;
            background: #dd4630;
            color: #fff;
            font-size: 16px;
            outline:none;
            border:none;
            border-radius: 6px;
            cursor: pointer;
            transition: .2s;
            &:hover {
                background-color: #cc4630;
            }
            &:active {
                box-shadow: 0 4px #bebebe;
                transform: translateY(4px);
            }
        }

        .public-key {
            width: 100%;
            height: 120px;
            border: 1px solid darkgrey;
            outline: none;
            resize: none;
            font-size: 14px;
        }

        .other-datas {
            margin-top: 20px;
            width: 100%;
            height: 300px;
            border: 1px solid darkgrey;
            outline: none;
            resize: none;
            font-size: 14px;
        }

        .CodeMirror-wrap {
            border: 1px solid darkgrey;
            margin-top: 20px;
            font-size: 14px;
            height: 220px;

            &:nth-child(4){
                height: 75px;
            }
            &:nth-child(7){
                height: 25px;
            }
            &:nth-child(10){
                height: 130px;
            }
        }

        .verify-result {
            margin-top: 20px;
            width: 100%;
            height: 200px;
            border: 1px solid darkgrey;
            font-size: 15px;
            box-sizing: border-box;
            &.dice-result,&.baccarat-result {
                width: 100%;
                padding: 5px 10px;
                box-sizing: border-box;
                list-style: none;
                font-size: 16px;

                li{
                    margin-top: 5px;
                    font-weight: 500;
                    .success-sp {
                        font-weight: 700;
                        color: #1AB512;
                    }
                    .luckynum-sp {
                        font-weight: 700;
                        color: #d80927;
                    }
                    .pw,.pp {
                        font-weight: 700;
                        color: #00479D;;
                    }
                    .bw,.bp {
                        font-weight: 700;
                        color: #d80927;
                    }
                    .tie {
                        font-weight: 700;
                        color: #1AB512;
                    }
                    .black {
                        font-weight: 700;
                        color: #000;
                        font-size: 18px;
                    }
                    .red {
                        font-weight: 700;
                        color: #d80927;
                        font-size: 18px;
                    }
                }
            }
        }

        .verify-part {
            margin-top: 20px;

            .verify-btn {
                padding: 10px 40px;
                background: #dd4630;
                color: #fff;
                font-size: 16px;
                outline:none;
                border:none;
                border-radius: 6px;
                cursor: pointer;
                transition: .2s;
                &:hover {
                    background-color: #cc4630;
                }
                &:active {
                    box-shadow: 0 4px #bebebe;
                    transform: translateY(4px);
                }
            }

            .github-logo {
                width: 30px;
                height: 30px;
                vertical-align: middle;
                margin-left: 50px;
                margin-right: 10px;
            }
        }
    }

</style>

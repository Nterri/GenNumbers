<template>
  <div class="numbers">
    <div class="form">
      <form @submit.prevent="randomChoice">
        <div class="form-block">
          <div>Искать от</div>
          <input id="start" type="number" value="0">
        </div>
        <div class="form-block">
          <div>Искать до</div>
          <input id="end" type="number">
        </div>
        <div class="form-block">
          <div>Количество</div>
          <input id="count" type="number" value="1">
        </div>
        <div class="form-block">
          <input type="radio" id="test1" @change="floor" name="radio-group" checked>
          <label for="test1">Только целые числа</label>
        </div>
        <div class="form-block">
          <input type="radio" id="test2" @change="floor" name="radio-group">
          <label for="test2">Целые и дробные числа</label>
        </div>
        <div class="form-block floor" :class="{
          'open': this.floorCheck
        }">
          <div>Количество знаков после запятой</div>
          <input id="floor" type="number" placeholder="0 - 15">
        </div>
        <div class="form-block">
          <input type="checkbox" id="check-repeat" checked>
          <label for="check-repeat">Включить повторение чисел</label>
        </div>
        <button>Поиск</button>
      </form>
      <div class="form-nav" v-if="this.numbers.length">
        <button @click="copy(this.numbers)">Копировать все числа</button>
        <p>Или нажмите на определенное число для копирования</p>
      </div>
    </div>
    <div class="number-mas" :class="{
        'open': this.numbers.length
      }">
      <div class="number-mas__list" :class="{
        'column': this.mode
      }">
        <div class="number-mas__number" @click="copy(number)" v-for="number in numbers">{{ number }}</div>
      </div>
    </div>
  </div>
  <div class="copy" :class="{
    'open': this.copyCheck
  }">Скопировано</div>
</template>

<script>
export default {
  name: 'gen-numbers',
  data() {
    return {
      numbers: [],
      mode: false,
      floorCheck: false,
      copyCheck: false
    }
  },
  methods: {
    randomInt(start, end) {
      start = Math.ceil(start)
      end = Math.floor(end)
      return Math.floor(Math.random() * (end - start + 1)) + start
    },
    randomFloat(start, end) {
      return Math.random() * (end - start + 1) + start
    },
    floor() {
      this.floorCheck = !this.floorCheck
    },
    numberRound(i) {
      let count = 1
      let j = 0
      while (j < i) {
        count = count + '0'
        j++
      }
      return Number(count)
    },
    countWidth() {
      let block1 = document.querySelector('.numbers')
      let block2 = document.querySelector('.form')
      let block3 = document.querySelector('.number-mas')
      if (block1 && block2 && block3) {
        block3.style.width = '0px'
        block3.style.width = `${block1.offsetWidth - block2.offsetWidth - 10}px`
        if (window.innerWidth <= 640) {
          block3.style.width = '100%'
        }
      }
    },
    copy(copy) {
      this.copyCheck = true
      navigator.clipboard.writeText(copy)
      setTimeout(() => {
        this.copyCheck = false
      }, 1000)
    },
    randomChoice() {
      let inputs = document.querySelector('.form').querySelectorAll('input')
      if (inputs.length) {
        let error = 0
        inputs.forEach(input => {
          input.classList.remove('error')
          if (input.value === '') {
            input.classList.add('error')
            error++
          }
          if (input.id === 'floor' && !this.floorCheck) {
            input.classList.remove('error')
            error--
          }
        })
        if (!error) {
          this.countWidth()
          this.numberRound(8)
          this.numberRound(2)
          this.mode = false
          let start = 0
          let end = 0
          let count = 0
          let mode = 0
          let floor = 2
          let repeat = true
          inputs.forEach(input => {
            if (input.id === 'start')
              start = Number(input.value)
            if (input.id === 'end')
              end = Number(input.value)
            if (input.id === 'count')
              count = Number(input.value)
            if (input.id === 'test1' && input.checked === true)
              mode = 1
            if (input.id === 'test2' && input.checked === true)
              mode = 2
            if (input.id === 'floor' && mode === 2)
              floor = Number(input.value)
            if (input.id === 'check-repeat' && input.checked !== true) {
              repeat = false
            }
          })
          if (mode === 2)
            this.mode = true
          this.numbers = []
          if ((end - start) < count && mode === 1) {
            let input = document.getElementById('check-repeat')
            if (input) {
              input.checked = true
            }
            repeat = true
          }
          if (repeat) {
            if (mode === 1) {
              for (let i = 0; i < count; i++) {
                let number = this.randomInt(start, end)
                this.numbers.push(number)
              }
            }
            if (mode === 2) {
              for (let i = 0; i < count; i++) {
                let number = this.randomFloat(start, end)
                this.numbers.push(number)
              }
              let roundNumbers = this.numberRound(floor)
              for (let i = 0; i < this.numbers.length; i++) {
                this.numbers[i] = Math.round(this.numbers[i] * roundNumbers) / roundNumbers
              }
            }
          } else {
            if (mode === 1) {
              for (let i = 0; i < count; i++) {
                let number = this.randomInt(start, end)
                while (this.numbers.find(n => n === number) || this.numbers.find(n => n === number) === 0) {
                  number = this.randomInt(start, end)
                }
                this.numbers.push(number)
              }
            }
            if (mode === 2) {
              for (let i = 0; i < count; i++) {
                let number = this.randomFloat(start, end)
                while (this.numbers.find(n => n === number) || this.numbers.find(n => n === number) === 0) {
                  number = this.randomFloat(start, end)
                }
                this.numbers.push(number)
              }
              let roundNumbers = this.numberRound(floor)
              for (let i = 0; i < this.numbers.length; i++) {
                this.numbers[i] = Math.round(this.numbers[i] * roundNumbers) / roundNumbers
              }
            }
          }
        }
      }
      console.clear()
    },
  },
  mounted() {
    console.clear()
  }
}
</script>

<style lang="scss" scoped>
@mixin adaptiv-value($property, $startSize, $minSize, $type) {
  $addSize: $startSize - $minSize;
  @if $type==1 {
    #{$property}: $startSize + px;
    @media (max-width: #{1200 + px}) {
      #{$property}: calc(#{$minSize + px} + #{$addSize} * ((100vw - 320px) / #{1200 - 320}));
    }
  }
  @if $type==2 {
    #{$property}: $startSize + px;
    @media (min-width: #{1200 + px}) {
      #{$property}: calc(#{$minSize + px} + #{$addSize} * ((100vw - 320px) / #{1200 - 320}));
    }
  }
  @if $type==3 {
    #{$property}: calc(#{$minSize + px} + #{$addSize} * ((100vw - 320px) / #{1200 - 320}));
  }
}
[type="checkbox"]:checked,
[type="checkbox"]:not(:checked) {
  position: absolute;
  left: -9999px;
}
[type="checkbox"]:checked + label,
[type="checkbox"]:not(:checked) + label
{
  position: relative;
  padding-left: 28px;
  cursor: pointer;
  display: inline-block;
}
[type="checkbox"]:checked + label:before,
[type="checkbox"]:not(:checked) + label:before {
  content: '';
  position: absolute;
  left: 0;
  top: 0;
  width: 18px;
  height: 18px;
  border-radius: 5px;
  border: 1px solid #000000;
  background: #fff;
}
[type="checkbox"]:checked + label:after,
[type="checkbox"]:not(:checked) + label:after {
  content: '';
  width: 12px;
  height: 12px;
  background: #000000;
  position: absolute;
  top: 4px;
  border-radius: 2px;
  left: 4px;
  -webkit-transition: all 0.2s ease;
  transition: all 0.2s ease;
}
[type="checkbox"]:not(:checked) + label:after {
  opacity: 0;
  -webkit-transform: scale(0);
  transform: scale(0);
}
[type="checkbox"]:checked + label:after {
  opacity: 1;
  -webkit-transform: scale(1);
  transform: scale(1);
}
.numbers {
  display: flex;
  align-items: start;
  gap: 10px;
  @include adaptiv-value('font-size', 20, 14, 1);
  justify-content: center;
  @media (max-width: 640px) {
    flex-direction: column;
    align-items: center;
  }
}
.number-mas {
  width: 0px;
  overflow: hidden;
  transition: all 0.3s;
  &.open {
    overflow: visible;
  }
}
.form {
  flex: 0 0 320px;
  @media (max-width: 640px) {
    flex: 1 1 auto;
  }
}
.form-nav {
  margin: 10px 0 0 0;
  text-align: center;
  button {
    width: 100%;
  }
  p {
    margin: 10px 0 0 0;
  }
}
.number-mas__list {
  display: flex;
  align-items: center;
  justify-content: start;
  &.column {
    flex-direction: column;
    .number-mas__number {
      width: 100%;
    }
  }
  gap: 5px;
  flex-wrap: wrap;
  .number-mas__number {
    text-align: center;
    cursor: pointer;
    padding: 5px;
    border: 1px solid black;
    border-radius: 5px;
    &.active {
      border: 1px solid #ec9017;
    }
  }
}
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  /* display: none; <- Crashes Chrome on hover */
  -webkit-appearance: none;
  margin: 0; /* <-- Apparently some margin are still there even though it's hidden */
}
input, button {
  font-size: inherit;
}
.form {
  form {
    display: flex;
    flex-direction: column;
    gap: 10px;
    width: 100%;
    max-width: 400px;
    .form-block {
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      justify-content: space-between;
      gap: 10px;
      &.floor {
        height: 0px;
        overflow: hidden;
        background: white;
        transition: all 0.3s;
        &.open {
          @include adaptiv-value('height', 95, 61, 1);
        }
      }
    }
    input, input:focus {
      padding: 5px 10px;
      outline: 0;
      border: 1px solid black;
      width: 100%;
      max-width: 100px;
      border-radius: 10px;
      transition: all 0.3s;
      &.error {
        border: 1px solid #c41616;
      }
    }
  }
}
button, button:focus {
  padding: 5px 10px;
  border-radius: 10px;
  background: transparent;
  cursor: pointer;
  border: 1px solid black;
  outline: 0;
}
.copy {
  padding: 5px 10px;
  border-radius: 10px;
  background: white;
  border: 1px solid black;
  width: max-content;
  position: fixed;
  @include adaptiv-value('font-size', 20, 14, 1);
  bottom: 15px;
  left: 50%;
  transform: translate(-50%, 100%);
  opacity: 0;
  transition: all 0.3s;
  &.open {
    transform: translate(-50%, 0);
    opacity: 1;
  }
}
[type="radio"]:checked,
[type="radio"]:not(:checked) {
  position: absolute;
  left: -9999px;
}
[type="radio"]:checked + label,
[type="radio"]:not(:checked) + label
{
  position: relative;
  padding-left: 28px;
  cursor: pointer;
  display: inline-block;
}
[type="radio"]:checked + label:before,
[type="radio"]:not(:checked) + label:before {
  content: '';
  position: absolute;
  left: 0;
  top: 0;
  width: 18px;
  height: 18px;
  border: 1px solid rgba(0, 0, 0, 0.87);
  border-radius: 100%;
  background: #fff;
}
[type="radio"]:checked + label:after,
[type="radio"]:not(:checked) + label:after {
  content: '';
  width: 12px;
  height: 12px;
  background: #000000;
  position: absolute;
  top: 4px;
  left: 4px;
  border-radius: 100%;
  -webkit-transition: all 0.2s ease;
  transition: all 0.2s ease;
}
[type="radio"]:not(:checked) + label:after {
  opacity: 0;
  -webkit-transform: scale(0);
  transform: scale(0);
}
[type="radio"]:checked + label:after {
  opacity: 1;
  -webkit-transform: scale(1);
  transform: scale(1);
}
</style>
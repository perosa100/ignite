import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  :root{
     --background:#f0f2f5;
     --blue:#5429cc;
     --blue-light:#6933ff;
     --shape-white:#fff;
     --text-title: #1a1e2d;
     --green:#33cc95;
      --red:#ff0d13;
     --text-body:#969cb3;
  }
 
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  
  html{
    @media(max-width:1080px){
      font-size:93.75%
    }
      @media(max-width:720px){
        font-size:87.5%
    }
      @media(max-width:1080px){
        font-size:93.75%
    }
  }

  body {
    background: var(--background);
    -webkit-font-smoothing: antialiased;
  }

  body,input,textarea,button{
    font-family: 'Poppins',sans-serif;
    font-weight: 400;
  }

  h1,h2,h3,h4,h5,h6{
    font-weight: 600;
  }

  cursor: pointer;

  [disabled]{
    opacity: 0.4;
    cursor: not-allowed;
  }

  .react-modal-overlay{
    background: rgba(0,0,0,0.5);

    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;

    display: flex;
    align-items: center;
    justify-content: center;

  }

  .react-modal-content{
    width: 100%;
    max-width: 576px;
    background: var(--background);
    padding: 3rem;
    position: relative;
    border-radius: 0.25rem;
  }

  .react-modal-close{
    position: absolute;
    right: 1.5rem;
    top: 1.5rem;
    border: 0;
    background: transparent;

    transition: filter ease 0.3s;
    cursor: pointer;

    &:hover {
      filter: brightness(0.5);
    }
  }

`

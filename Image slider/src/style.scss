%transition_all_03s {
  transition:all .3s ease;
}
%backface_visibility_hidden{
  backface-visibility:hidden;
  -webkit-backface-visibility:hidden;
}

*, *:before, *:after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

.swiper-container {
  width: 80%;
  height: 100vh;
  // display:inline-block;
  // vertical-align:top;
  float:left;
  transition:opacity .6s ease, transform .3s ease;
  &.nav-slider{
    width:20%;
    padding-left:5px;
    .swiper-slide{
      cursor:pointer;
      opacity:.4;
      transition:opacity .3s ease;
      &.swiper-slide-active{
        opacity:1;
      }
      .content{
        width:100%;
        .title{
          font-size:20px;
        }
      }
    }
  }
  &:hover{
    .swiper-button-prev,
    .swiper-button-next{
      transform:translateX(0);
      opacity:1;
      visibility:visible;
    }
  }
  &.loading{
    opacity:0;
    visibility:hidden;
  }
}
.swiper-wrapper{

}
.swiper-slide{
  overflow: hidden;
  @extend %backface_visibility_hidden;
  .slide-bgimg{
    position:absolute;
    top:0;
    left:0;
    width:100%;
    height:100%;
    background-position:center;
    background-size:cover;
  }
  .entity-img{
    display:none;
  }
  .content{
    position:absolute;
    top:40%;
    left:0;
    width:50%;
    padding-left:5%;
    color:#fff;
    .title{
      font-size:2.6em;
      font-weight:bold;
      margin-bottom:30px;
    }
    .caption{
      display:block;
      font-size:13px;
      line-height:1.4;
      transform:translateX(50px);
      opacity:0;
      transition:opacity .3s ease, transform .7s ease;
      &.show{
        transform:translateX(0);
        opacity:1;
      }
    }
  }
}
[class^="swiper-button-"]{
  width:44px;
  opacity:0;
  visibility:hidden;
  @extend %transition_all_03s;
}
.swiper-button-prev{
  transform:translateX(50px);
}
.swiper-button-next{
  transform:translateX(-50px);
}
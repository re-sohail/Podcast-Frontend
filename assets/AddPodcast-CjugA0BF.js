import{d as y,r as u,b as N,j as e}from"./index-qAxQLmkf.js";import{B as j,Y as D,Q as w}from"./ReactToastify-BDgyuPU9.js";function C(){let i=y(),[p,o]=u.useState(null),[r,g]=u.useState(null),[h,n]=u.useState(!1),[s,m]=u.useState({title:"",description:"",category:""});return{uploadedImage:p,uploadedAudio:r,imageDragging:h,input:s,handleChangeImage:a=>{let t=a.target.files[0];t&&t.type.startsWith("image/")?o(t):console.error("Not a valid image file")},handleDragEnter:a=>{a.preventDefault(),n(!0)},handleDragLeave:a=>{a.preventDefault(),n(!1)},handleDragOver:a=>{a.preventDefault()},handleDrop:a=>{a.preventDefault(),n(!1);let t=a.dataTransfer.files[0];t&&t.type.startsWith("image/")?o(t):console.error("Dropped file is not an image")},handleAudio:a=>{a.preventDefault();let t=a.target.files[0];g(t)},handleInput:a=>{let{name:t,value:c}=a.target;m({...s,[t]:c})},submittedDate:async a=>{var c,v,b;a.preventDefault();const t=new FormData;t.append("title",s.title),t.append("description",s.description),t.append("category",s.category),t.append("image",p),t.append("audio",r);try{let l=await N.post("https://podcast-api-gh6v.onrender.com/add-podcast",t,{headers:{"Content-Type":"multipart/form-data"},withCredentials:!0});j.success((c=l==null?void 0:l.data)==null?void 0:c.message,{position:"bottom-right",autoClose:5e3,hideProgressBar:!0,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"light",transition:D}),setTimeout(()=>{i("/profile"),dispatch(authActions.login())},2e3)}catch(l){console.log(l),j.success((b=(v=l==null?void 0:l.response)==null?void 0:v.data)==null?void 0:b.message,{position:"bottom-right",autoClose:5e3,hideProgressBar:!0,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"light",transition:D})}}}}function O(){let{uploadedImage:i,uploadedAudio:p,imageDragging:o,input:r,handleChangeImage:g,handleDragEnter:h,handleDragLeave:n,handleDragOver:s,handleDrop:m,handleAudio:x,handleInput:d,submittedDate:f}=C();return e.jsxs("div",{className:"x:hidden xs:block xs:p-6 md:p-10 w-full min-h-[55vh] bg-[#F7EDE8]",children:[e.jsx(w,{position:"bottom-right",autoClose:5e3,hideProgressBar:!0,newestOnTop:!0,closeOnClick:!0,rtl:!1,pauseOnFocusLoss:!0,draggable:!0,pauseOnHover:!0,theme:"light","transition:Flip":!0}),e.jsxs("form",{className:"w-full h-full flex items-start justify-start gap-10 xs:flex-col lg:flex-row",children:[e.jsxs("div",{onDragEnter:h,onDragLeave:n,onDragOver:s,onDrop:m,className:`xs:w-full lg:w-2/6 full border-black border-2 border-dotted ${o?"bg-gray-200":""}`,children:[e.jsx("input",{type:"file",accept:"image/*",id:"file",name:"image",onChange:g,required:!0,className:"hidden"}),i?e.jsx("div",{className:"w-full h-[55vh] overflow-hidden",children:e.jsx("img",{src:URL.createObjectURL(i),alt:"thumbnail image",className:"w-full h-full object-cover"})}):e.jsx("label",{htmlFor:"file",className:"w-full h-[55vh] flex items-center justify-center text-xl cursor-pointer hover:bg-[#f7f5f4c5] transition-all duration-300",children:e.jsxs("div",{className:"text-center",children:["Drag and Drop the Thumbnail ",e.jsx("br",{})," or click to browse"]})})]}),e.jsxs("div",{className:"xs:w-full lg:w-4/6 h-full",children:[e.jsxs("div",{children:[e.jsx("label",{htmlFor:"title",className:"text-lg font-semibold",children:"Title"}),e.jsx("input",{type:"text",placeholder:"Write your podcast's title",name:"title",id:"title",required:!0,value:r.title,onChange:d,className:"w-full h-[50px] px-3 text-zinc-900 bg-transparent border-2 border-black placeholder:text-zinc-500 outline-none mt-2"})]}),e.jsxs("div",{className:"mt-5",children:[e.jsx("label",{htmlFor:"description",className:"text-lg font-semibold",children:"Description"}),e.jsx("textarea",{type:"text",placeholder:"Write your podcast's Description",name:"description",id:"description",required:!0,value:r.description,onChange:d,className:"w-full h-[140px] resize-none p-3 text-zinc-900 bg-transparent border-2 border-black placeholder:text-zinc-500 outline-none mt-2"})]}),e.jsxs("div",{className:"flex xs:items-start lg:items-center justify-start xs:gap-5 lg:gap-10 xs:flex-col lg:flex-row",children:[e.jsxs("div",{className:"xs:mt-5 lg:mt-0 flex items-start flex-col",children:[e.jsx("label",{htmlFor:"Description",className:"text-lg font-semibold",children:"Podcast File"}),e.jsx("input",{type:"file",accept:".mp3 , .wav, .m4a, .ogg",placeholder:"Write your podcast's Description",name:"audio",id:"audio",required:!0,onChange:x,className:"pt-3"})]}),e.jsxs("div",{className:"lg:mt-5 flex items-start flex-col",children:[e.jsx("label",{htmlFor:"Description",className:"text-lg font-semibold",children:"Choose Category"}),e.jsxs("select",{name:"category",value:r.category,onChange:d,id:"category",required:!0,className:"mt-3 w-[300px] h-[50px] bg-transparent border-2  border-black outline-none",children:[e.jsx("option",{value:"",children:"Please Choose the category"}),e.jsx("option",{value:"traveling",children:"Traveling"}),e.jsx("option",{value:"self–confidence",children:"Self Confidence"}),e.jsx("option",{value:"perplexed-mind",children:"Perplexed Mind"}),e.jsx("option",{value:"women-rights",children:"Women Rights"}),e.jsx("option",{value:"social-class",children:"Social Class"})]})]})]}),e.jsx("button",{onClick:f,className:"border select-none px-4 py-2 xs:mt-10 lg:mt-2 bg-black text-[#f5f5f5] rounded-md",children:"Upload"})]})]})]})}function T(){return e.jsx(e.Fragment,{children:e.jsx(O,{})})}export{T as default};

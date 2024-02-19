'use client';
import React, { useState } from 'react';
import { Editor } from '@tinymce/tinymce-react';

export default function Editer() {
  const [editorContent, setEditorContent] = useState('');

  const handleEditorChange = (content, editor) => {
    setEditorContent(content);
  };

  const handleSubmission = () => {
    // You can now use the editorContent state for further processing or submission
    console.log('Editor Content:', editorContent);
    // Add your logic for submission here
  };

  return (
    <>
      {/* <div className="container">
        <Editor
          apiKey="y5p4huxtuvw2boq9u0zk1xehkzsmcaxdll89coa6klob7kcp"
          init={{
            plugins:
              'ai tinycomments mentions anchor autolink charmap codesample emoticons image link lists media searchreplace table visualblocks wordcount checklist mediaembed casechange export formatpainter pageembed permanentpen footnotes advtemplate advtable advcode editimage tableofcontents mergetags powerpaste tinymcespellchecker autocorrect a11ychecker typography inlinecss',
            toolbar:
              'undo redo | blocks fontfamily fontsize | bold italic underline strikethrough | link image media table mergetags | align lineheight | tinycomments | checklist numlist bullist indent outdent | emoticons charmap | removeformat',
            tinycomments_mode: 'embedded',
            tinycomments_author: 'Author name',
            mergetags_list: [
              { value: 'First.Name', title: 'First Name' },
              { value: 'Email', title: 'Email' },
            ],
            ai_request: (
              request: any,
              respondWith: { string: (arg0: () => Promise<never>) => any },
            ) =>
              respondWith.string(() =>
                Promise.reject('See docs to implement AI Assistant'),
              ),
          }}
          initialValue="Welcome to TinyMCE!"
          onEditorChange={handleEditorChange}
        />
        <button onClick={handleSubmission}>Submit</button>
      </div>
      <div className="submission-container">
        <p>asdasd</p>
      </div> */}
      <div className="flex">
        <div className="w-70 p-4">
          <Editor
            apiKey="y5p4huxtuvw2boq9u0zk1xehkzsmcaxdll89coa6klob7kcp"
            init={{
              plugins:
                'ai tinycomments mentions anchor autolink charmap codesample emoticons image link lists media searchreplace table visualblocks wordcount checklist mediaembed casechange export formatpainter pageembed permanentpen footnotes advtemplate advtable advcode editimage tableofcontents mergetags powerpaste tinymcespellchecker autocorrect a11ychecker typography inlinecss',
              toolbar:
                'undo redo | blocks fontfamily fontsize | bold italic underline strikethrough | link image media table mergetags | align lineheight | tinycomments | checklist numlist bullist indent outdent | emoticons charmap | removeformat',
              tinycomments_mode: 'embedded',
              tinycomments_author: 'Author name',
              mergetags_list: [
                { value: 'First.Name', title: 'First Name' },
                { value: 'Email', title: 'Email' },
              ],
              ai_request: (
                request: any,
                respondWith: { string: (arg0: () => Promise<never>) => any },
              ) =>
                respondWith.string(() =>
                  Promise.reject('See docs to implement AI Assistant'),
                ),
            }}
            initialValue="Welcome to TinyMCE!"
            onEditorChange={handleEditorChange}
          />
           <button
            className="bg-blue-500 text-white px-4 py-2 rounded"
            onClick={handleSubmission}
          >
            Submit
          </button>
        </div>
        <div className="w-30 p-4">
         
        </div>
      </div>
    </>
  );
}

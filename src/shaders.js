var SHADERS = {"interaction":{"src":{"vertex":"\nprecision mediump float;\nattribute vec4 aPosition;\nattribute vec3 aColor;\nattribute float aHidden;\nuniform mat4 uMatrix;\nvarying vec3 vColor;\nvoid main() {\n  if (aHidden == 1.0) {\n    gl_Position = vec4(0.0);\n    vColor = vec3(0.0);\n  } else {\n    gl_Position = uMatrix * aPosition;\n    vColor = aColor;\n  }\n}\n","fragment":"\nprecision mediump float;\nvarying vec3 vColor;\nvoid main() {\n  gl_FragColor = vec4(vColor, 1.0);\n}\n"},"attributes":["aPosition","aColor","aHidden"],"uniforms":["uMatrix"],"framebuffer":true},"depth":{"src":{"vertex":"\nprecision mediump float;\nattribute vec4 aPosition;\nattribute float aHidden;\nuniform mat4 uMatrix;\nvarying vec4 vPosition;\nvoid main() {\n  if (aHidden == 1.0) {\n    gl_Position = vec4(0.0);\n    vPosition = vec4(0.0);\n  } else {\n    gl_Position = uMatrix * aPosition;\n    vPosition = aPosition;\n  }\n}\n","fragment":"\nprecision mediump float;\nvarying vec4 vPosition;\nvoid main() {\n\tgl_FragColor = vec4(vPosition.xyz, length(vPosition));\n}\n"},"attributes":["aPosition","aHidden"],"uniforms":["uMatrix"],"framebuffer":true},"basemap":{"src":{"vertex":"\nprecision mediump float;\nattribute vec4 aPosition;\nattribute vec2 aTexCoord;\nuniform mat4 uMatrix;\nvarying vec2 vTexCoord;\nvoid main() {\n  gl_Position = uMatrix * aPosition;\n  vTexCoord = aTexCoord;\n}\n","fragment":"\nprecision mediump float;\nuniform sampler2D uTileImage;\nvarying vec2 vTexCoord;\nvoid main() {\n  gl_FragColor = texture2D(uTileImage, vec2(vTexCoord.x, -vTexCoord.y));\n}\n"},"attributes":["aPosition","aTexCoord"],"uniforms":["uMatrix","uTileImage"]},"buildings":{"src":{"vertex":"\nprecision mediump float;\nattribute vec4 aPosition;\nattribute vec3 aNormal;\nattribute vec3 aColor;\nattribute float aHidden;\nuniform mat4 uMatrix;\nuniform mat3 uNormalTransform;\nuniform vec3 uLightDirection;\nuniform vec3 uLightColor;\nvarying vec3 vColor;\nvarying vec4 vPosition;\nvoid main() {\n  if (aHidden == 1.0) {\n    gl_Position = vec4(0.0);\n    vPosition = vec4(0.0);\n    vColor = vec3(0.0, 0.0, 0.0);\n  } else {\n    gl_Position = uMatrix * aPosition;\n    vPosition = aPosition;\n    vec3 transformedNormal = aNormal * uNormalTransform;\n    float intensity = max( dot(transformedNormal, uLightDirection), 0.0) / 1.5;\n    vColor = aColor + uLightColor * intensity;\n  }\n}","fragment":"\nprecision mediump float;\nuniform float uAlpha;\nvarying vec4 vPosition;\nvarying vec3 vColor;\nfloat gradientHeight = 90.0;\nfloat maxGradientStrength = 0.3;\nvoid main() {\n  float shading = clamp((gradientHeight-vPosition.z) / (gradientHeight/maxGradientStrength), 0.0, maxGradientStrength);\n  gl_FragColor = vec4(vColor - shading, uAlpha);\n}\n"},"attributes":["aPosition","aColor","aNormal","aHidden"],"uniforms":["uNormalTransform","uMatrix","uAlpha","uLightColor","uLightDirection"]}};

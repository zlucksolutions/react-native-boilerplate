package com.boilerplate

import android.content.Intent
import android.os.Bundle
import androidx.appcompat.app.AppCompatActivity

class SplashActivity : AppCompatActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)

        // Here you can perform any operations needed during splash screen initialization,
        // such as loading data, initializing resources, etc.

        // For simplicity, let's just navigate to the MainActivity after a short delay
        val intent = Intent(this, MainActivity::class.java)
        startActivity(intent)
        finish() // Finish the SplashActivity so that it's not in the back stack
    }
}
